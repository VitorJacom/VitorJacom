import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();
const CI_SITE_PATH = path.join(REPO_ROOT, '.github', 'workflows', 'ci-site.yml');
const VITE_CONFIG_PATH = path.join(REPO_ROOT, 'site', 'vite.config.ts');

describe('Issue #24 — CI Governance: Golden Rule Guard & 85% Coverage Enforcement', () => {
  describe('Happy Path', () => {
    it('should configure actions/checkout with fetch-depth: 0 in ci-site.yml', () => {
      assert.ok(fs.existsSync(CI_SITE_PATH), '.github/workflows/ci-site.yml must exist');
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      assert.match(ciYaml, /uses:\s*actions\/checkout@v4/);
      assert.match(ciYaml, /fetch-depth:\s*0/);
    });

    it('should include the Golden Rule Anti-Tamper Guard step checking origin/main...HEAD', () => {
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      assert.match(ciYaml, /name:\s*Golden Rule Anti-Tamper Guard/);
      assert.match(ciYaml, /set -euo pipefail/);
      assert.match(ciYaml, /git diff --name-only origin\/main\.\.\.HEAD/);
      assert.match(ciYaml, /exit 1/);
    });

    it('should include the Run Core Root Tests step executing node --test tests/core/*.test.mjs', () => {
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      assert.match(ciYaml, /name:\s*Run Core Root Tests/);
      assert.match(ciYaml, /node --test tests\/core\/\*\.test\.mjs/);
    });

    it('should run npm run coverage in ci-site.yml', () => {
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      assert.match(ciYaml, /npm run coverage/);
    });

    it('should enforce 85% coverage thresholds for lines, functions, branches, and statements in site/vite.config.ts', () => {
      assert.ok(fs.existsSync(VITE_CONFIG_PATH), 'site/vite.config.ts must exist');
      const viteConfig = fs.readFileSync(VITE_CONFIG_PATH, 'utf-8');
      assert.match(viteConfig, /thresholds:\s*\{/);
      assert.match(viteConfig, /lines:\s*85/);
      assert.match(viteConfig, /functions:\s*85/);
      assert.match(viteConfig, /branches:\s*85/);
      assert.match(viteConfig, /statements:\s*85/);
    });
  });

  describe('Edge Cases & Failure Modes', () => {
    it('should protect both root tests/core/ and site/tests/core/ in the Golden Rule regex', () => {
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      const regexMatch = ciYaml.match(/grep -E ['"]([^'"]+)['"]/);
      assert.ok(regexMatch, 'Golden Rule guard must use grep -E with a pattern');
      const pattern = new RegExp(regexMatch[1]);

      assert.ok(pattern.test('tests/core/profile_validation.test.mjs'), 'Must match root tests/core/ files');
      assert.ok(pattern.test('site/tests/core/canonical_data.test.ts'), 'Must match site/tests/core/ files');
      assert.ok(!pattern.test('tests/features/ci_governance.test.mjs'), 'Must not match tests/features/ files');
      assert.ok(!pattern.test('site/tests/features/app.test.tsx'), 'Must not match site/tests/features/ files');
    });

    it('should trigger ci-site.yml on changes to tests/** as well as site/**', () => {
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      assert.match(ciYaml, /-\s*['"]tests\/\*\*['"]/);
      assert.match(ciYaml, /-\s*['"]site\/\*\*['"]/);
    });

    it('should not mask Golden Rule failures with exit 0', () => {
      const ciYaml = fs.readFileSync(CI_SITE_PATH, 'utf-8');
      assert.doesNotMatch(ciYaml, /exit 0/, 'CI workflow must not mask failures with exit 0');
    });
  });
});
