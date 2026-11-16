import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();

const HOME_MD_PATH = path.join(REPO_ROOT, 'docs', 'Home.md');
const SIDEBAR_MD_PATH = path.join(REPO_ROOT, 'docs', '_Sidebar.md');
const FOOTER_MD_PATH = path.join(REPO_ROOT, 'docs', '_Footer.md');
const MOCKUPS_README_PATH = path.join(REPO_ROOT, 'docs', 'mockups', 'README.md');
const MOCKUPS_TEMPLATE_PATH = path.join(REPO_ROOT, 'docs', 'mockups', 'TEMPLATE.md');
const PROFILE_MOCKUP_MD_PATH = path.join(
  REPO_ROOT,
  'docs',
  'mockups',
  'github-profile-readme.md'
);
const PROFILE_MOCKUP_PNG_PATH = path.join(
  REPO_ROOT,
  'docs',
  'assets',
  'mockups',
  'github-profile-readme.png'
);
const SCREENSHOTS_README_PATH = path.join(
  REPO_ROOT,
  'docs',
  'screenshots',
  'README.md'
);
const SITE_FOUNDATION_MD_PATH = path.join(
  REPO_ROOT,
  'docs',
  'screenshots',
  'site-foundation.md'
);
const SITE_FOUNDATION_PNG_PATH = path.join(
  REPO_ROOT,
  'docs',
  'screenshots',
  'site-foundation-preview.png'
);
const WIKI_SYNC_WORKFLOW_PATH = path.join(
  REPO_ROOT,
  '.github',
  'workflows',
  'wiki-sync.yml'
);
const GITIGNORE_PATH = path.join(REPO_ROOT, '.gitignore');
const EPHEMERAL_PREVIEW_HTML_PATH = path.join(REPO_ROOT, '.mockup-preview.html');

describe('Issue #25 — Wiki Living Specs Catalog & Continuous Gollum Sync Suite', () => {
  describe('Happy Path', () => {
    it('should provide docs/Home.md with executive overview, 4 AIDD values, portfolio stack, AGES showcase, blog, MCP server, mockups catalog, and implemented screens catalog links', () => {
      assert.ok(
        fs.existsSync(HOME_MD_PATH),
        `Expected docs/Home.md to exist at ${HOME_MD_PATH}`
      );
      const content = fs.readFileSync(HOME_MD_PATH, 'utf-8');
      assert.ok(content.trim().length > 100, 'docs/Home.md should not be empty');

      const requiredTerms = [
        'VitorJacom',
        'Method over Model',
        'Ownership over Delegation',
        'Understanding over Acceptance',
        'Outcome over Output',
        'React 19',
        'AGES',
        'MCP',
        'Mockups-Catalog',
        'github-profile-readme',
        'Implemented-Screens-Catalog',
        'site-foundation'
      ];

      for (const term of requiredTerms) {
        assert.ok(
          content.includes(term),
          `docs/Home.md must mention required term/link: "${term}"`
        );
      }
    });

    it('should provide docs/_Sidebar.md with navigation links to Home, ARCHITECTURE, ADRs 0001-0003, Mockups-Catalog, github-profile-readme, Implemented-Screens-Catalog, and site-foundation', () => {
      assert.ok(
        fs.existsSync(SIDEBAR_MD_PATH),
        `Expected docs/_Sidebar.md to exist at ${SIDEBAR_MD_PATH}`
      );
      const content = fs.readFileSync(SIDEBAR_MD_PATH, 'utf-8');

      const requiredLinks = [
        'Home',
        'ARCHITECTURE',
        '0001-stack-e-estrutura-da-pagina-pessoal',
        '0002-content-driven-blog-e-mcp-stdio-sem-backend',
        '0003-showcase-interativo-ages-demos-client-side',
        'Mockups-Catalog',
        'github-profile-readme',
        '🖥️ Telas Implementadas',
        'Implemented-Screens-Catalog',
        'site-foundation'
      ];

      for (const target of requiredLinks) {
        assert.ok(
          content.includes(target),
          `docs/_Sidebar.md must include link/section target: "${target}"`
        );
      }
    });

    it('should provide docs/_Footer.md documenting Docs-as-Code governance and .github/workflows/wiki-sync.yml', () => {
      assert.ok(
        fs.existsSync(FOOTER_MD_PATH),
        `Expected docs/_Footer.md to exist at ${FOOTER_MD_PATH}`
      );
      const content = fs.readFileSync(FOOTER_MD_PATH, 'utf-8');
      assert.ok(
        content.includes('.github/workflows/wiki-sync.yml'),
        'docs/_Footer.md must reference .github/workflows/wiki-sync.yml'
      );
    });

    it('should provide docs/mockups/TEMPLATE.md with all 5 mandatory Living Spec sections', () => {
      assert.ok(
        fs.existsSync(MOCKUPS_TEMPLATE_PATH),
        `Expected docs/mockups/TEMPLATE.md to exist at ${MOCKUPS_TEMPLATE_PATH}`
      );
      const content = fs.readFileSync(MOCKUPS_TEMPLATE_PATH, 'utf-8');

      const mandatorySections = [
        '## 📋 Metadados',
        '## 🖼️ Visual Preview',
        '## 📐 Camada 1: Spatial Blueprint (ASCII)',
        '## 🎨 Camada 2: Design Tokens & Luminance Contract',
        '## ⚡ Estados Interativos'
      ];

      for (const section of mandatorySections) {
        assert.ok(
          content.includes(section),
          `docs/mockups/TEMPLATE.md must contain mandatory section heading: "${section}"`
        );
      }
    });

    it('should list both TEMPLATE.md and github-profile-readme.md in docs/mockups/README.md', () => {
      assert.ok(
        fs.existsSync(MOCKUPS_README_PATH),
        `Expected docs/mockups/README.md to exist at ${MOCKUPS_README_PATH}`
      );
      const content = fs.readFileSync(MOCKUPS_README_PATH, 'utf-8');

      assert.ok(
        content.includes('TEMPLATE.md'),
        'docs/mockups/README.md must reference TEMPLATE.md'
      );
      assert.ok(
        content.includes('github-profile-readme.md'),
        'docs/mockups/README.md must reference github-profile-readme.md'
      );
    });

    it('should preserve docs/mockups/github-profile-readme.md and valid PNG binary signature in docs/assets/mockups/github-profile-readme.png', () => {
      assert.ok(
        fs.existsSync(PROFILE_MOCKUP_MD_PATH),
        `Expected ${PROFILE_MOCKUP_MD_PATH} to exist`
      );
      const mdContent = fs.readFileSync(PROFILE_MOCKUP_MD_PATH, 'utf-8');

      const requiredSections = [
        '## 📋 Metadados',
        '## 🖼️ Visual Preview',
        '../assets/mockups/github-profile-readme.png',
        '## 📐 Camada 1: Spatial Blueprint (ASCII)',
        '## 🎨 Camada 2: Design Tokens & Luminance Contract',
        '## ⚡ Estados Interativos'
      ];

      for (const item of requiredSections) {
        assert.ok(
          mdContent.includes(item),
          `docs/mockups/github-profile-readme.md must include "${item}"`
        );
      }

      assert.ok(
        fs.existsSync(PROFILE_MOCKUP_PNG_PATH),
        `Expected PNG screenshot at ${PROFILE_MOCKUP_PNG_PATH}`
      );
      const pngBuffer = fs.readFileSync(PROFILE_MOCKUP_PNG_PATH);
      assert.ok(
        pngBuffer.length > 1024,
        'github-profile-readme.png must be a non-empty image (> 1KB)'
      );
      const expectedSignature = Buffer.from([
        0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a
      ]);
      assert.deepStrictEqual(
        pngBuffer.subarray(0, 8),
        expectedSignature,
        'github-profile-readme.png must start with a valid 8-byte PNG signature'
      );
    });

    it('should provide docs/screenshots/README.md (Implemented Screens Catalog) listing site-foundation.md and referencing production visual proof', () => {
      assert.ok(
        fs.existsSync(SCREENSHOTS_README_PATH),
        `Expected docs/screenshots/README.md to exist at ${SCREENSHOTS_README_PATH}`
      );
      const content = fs.readFileSync(SCREENSHOTS_README_PATH, 'utf-8');

      assert.ok(
        content.includes('site-foundation.md'),
        'docs/screenshots/README.md must list site-foundation.md'
      );
      assert.ok(
        content.includes('site-foundation'),
        'docs/screenshots/README.md must reference site-foundation slug'
      );
    });

    it('should provide docs/screenshots/site-foundation.md documenting the implemented Web Portfolio screen and validate PNG signature of docs/screenshots/site-foundation-preview.png', () => {
      assert.ok(
        fs.existsSync(SITE_FOUNDATION_MD_PATH),
        `Expected docs/screenshots/site-foundation.md to exist at ${SITE_FOUNDATION_MD_PATH}`
      );
      const mdContent = fs.readFileSync(SITE_FOUNDATION_MD_PATH, 'utf-8');

      const requiredItems = [
        'React 19',
        'Tailwind CSS',
        '## 📋 Metadados',
        '## 🖼️ Captura da Implementação Renderizada',
        '../screenshots/site-foundation-preview.png'
      ];

      for (const item of requiredItems) {
        assert.ok(
          mdContent.includes(item),
          `docs/screenshots/site-foundation.md must include "${item}"`
        );
      }

      assert.ok(
        fs.existsSync(SITE_FOUNDATION_PNG_PATH),
        `Expected production PNG screenshot at ${SITE_FOUNDATION_PNG_PATH}`
      );
      const pngBuffer = fs.readFileSync(SITE_FOUNDATION_PNG_PATH);
      assert.ok(
        pngBuffer.length > 1024,
        'site-foundation-preview.png must be a non-empty image (> 1KB)'
      );
      const expectedSignature = Buffer.from([
        0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a
      ]);
      assert.deepStrictEqual(
        pngBuffer.subarray(0, 8),
        expectedSignature,
        'site-foundation-preview.png must start with a valid 8-byte PNG signature'
      );
    });

    it('should configure .github/workflows/wiki-sync.yml with push triggers on main (docs/** and workflow path), workflow_dispatch, and contents: write permission', () => {
      assert.ok(
        fs.existsSync(WIKI_SYNC_WORKFLOW_PATH),
        `Expected workflow file at ${WIKI_SYNC_WORKFLOW_PATH}`
      );
      const workflow = fs.readFileSync(WIKI_SYNC_WORKFLOW_PATH, 'utf-8');

      assert.match(workflow, /push:/, 'Workflow must define push trigger');
      assert.match(workflow, /branches:\s*\[\s*main\s*\]|-\s*main/, 'Workflow must target main branch');
      assert.ok(
        workflow.includes('docs/**'),
        'Workflow must filter paths on docs/**'
      );
      assert.ok(
        workflow.includes('.github/workflows/wiki-sync.yml'),
        'Workflow must filter paths on .github/workflows/wiki-sync.yml'
      );
      assert.match(
        workflow,
        /workflow_dispatch:/,
        'Workflow must support manual trigger via workflow_dispatch'
      );
      assert.match(
        workflow,
        /contents:\s*write/,
        'Workflow must declare permissions: contents: write'
      );
    });
  });

  describe('Edge Cases & Failure Modes', () => {
    it('should enforce Rule 1.4 Fail-Fast in .github/workflows/wiki-sync.yml (set -euo pipefail, ::error:: + exit 1 on clone/push failures, zero exit 0 masking)', () => {
      assert.ok(
        fs.existsSync(WIKI_SYNC_WORKFLOW_PATH),
        `Cannot validate Fail-Fast rules: ${WIKI_SYNC_WORKFLOW_PATH} does not exist`
      );
      const workflow = fs.readFileSync(WIKI_SYNC_WORKFLOW_PATH, 'utf-8');

      assert.ok(
        workflow.includes('set -euo pipefail'),
        'Workflow shell script must start with "set -euo pipefail"'
      );

      assert.ok(
        !workflow.includes('exit 0'),
        'Workflow must NEVER mask failures with "exit 0" (Rule 1.4 violation)'
      );

      const errorAnnotations = workflow.match(/::error::/g) || [];
      assert.ok(
        errorAnnotations.length >= 2,
        `Workflow must emit "::error::" annotations on both git clone and git push failures (found ${errorAnnotations.length})`
      );

      const exitOnes = workflow.match(/exit 1/g) || [];
      assert.ok(
        exitOnes.length >= 2,
        `Workflow must terminate with "exit 1" on both git clone and git push failures (found ${exitOnes.length})`
      );
    });

    it('should perform Dual-Context normalization for Gollum engine (generating Mockups-Catalog.md & Implemented-Screens-Catalog.md and rewriting ../assets/mockups/ and ../screenshots/)', () => {
      assert.ok(
        fs.existsSync(WIKI_SYNC_WORKFLOW_PATH),
        `Cannot validate Dual-Context normalization: ${WIKI_SYNC_WORKFLOW_PATH} does not exist`
      );
      const workflow = fs.readFileSync(WIKI_SYNC_WORKFLOW_PATH, 'utf-8');

      assert.ok(
        workflow.includes('Mockups-Catalog.md'),
        'Workflow must generate Mockups-Catalog.md from docs/mockups/README.md for Gollum compatibility'
      );
      assert.ok(
        workflow.includes('Implemented-Screens-Catalog.md'),
        'Workflow must generate Implemented-Screens-Catalog.md from docs/screenshots/README.md for Gollum compatibility'
      );
      assert.match(
        workflow,
        /sed\s+-i\s+['"]s\|\.\.\/assets\/mockups\/\|assets\/mockups\/\|g['"]/,
        'Workflow must rewrite relative image paths "../assets/mockups/" to "assets/mockups/" for flat Gollum root rendering'
      );
      assert.match(
        workflow,
        /sed\s+-i\s+['"]s\|\.\.\/screenshots\/\|screenshots\/\|g['"]/,
        'Workflow must rewrite relative image paths "../screenshots/" to "screenshots/" for flat Gollum root rendering'
      );
    });

    it('should shield ephemeral mockup preview and planning artifacts in .gitignore and keep root workspace clean of .mockup-preview.html', () => {
      assert.ok(
        fs.existsSync(GITIGNORE_PATH),
        `Expected .gitignore at ${GITIGNORE_PATH}`
      );
      const gitignore = fs.readFileSync(GITIGNORE_PATH, 'utf-8');

      const requiredIgnoredEntries = [
        '.mockup-preview.html',
        '.mockup-preview.png',
        'planning_proposal.md'
      ];

      for (const entry of requiredIgnoredEntries) {
        assert.ok(
          gitignore.includes(entry),
          `.gitignore must explicitly ignore ephemeral artifact: "${entry}"`
        );
      }

      assert.ok(
        !fs.existsSync(EPHEMERAL_PREVIEW_HTML_PATH),
        `Ephemeral file ${EPHEMERAL_PREVIEW_HTML_PATH} must not remain in the repository root`
      );
    });

    it('should not contain empty markdown links [text]() across any Wiki, Mockup, or Implemented Screen markdown files', () => {
      const markdownFiles = [
        HOME_MD_PATH,
        SIDEBAR_MD_PATH,
        FOOTER_MD_PATH,
        MOCKUPS_README_PATH,
        MOCKUPS_TEMPLATE_PATH,
        PROFILE_MOCKUP_MD_PATH,
        SCREENSHOTS_README_PATH,
        SITE_FOUNDATION_MD_PATH
      ];

      const emptyLinkRegex = /\[[^\]]*\]\(\s*\)/g;

      for (const filePath of markdownFiles) {
        assert.ok(
          fs.existsSync(filePath),
          `Expected Markdown file to exist for link integrity check: ${filePath}`
        );
        const content = fs.readFileSync(filePath, 'utf-8');
        const matches = content.match(emptyLinkRegex);
        assert.strictEqual(
          matches,
          null,
          `Found empty markdown link(s) in ${path.relative(REPO_ROOT, filePath)}: ${JSON.stringify(matches)}`
        );
      }
    });
  });
});
