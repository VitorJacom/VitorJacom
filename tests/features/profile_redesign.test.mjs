import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '../..');

describe('Issue #23 — Brand Assets & GitHub Profile Redesign Suite', () => {
  describe('Happy Path', () => {
    it('should contain all 5 canonical brand assets in site/public/', () => {
      const assets = ['avatar.png', 'avatar.webp', 'banner.webp', 'banner.jpg', 'favicon.svg'];
      for (const asset of assets) {
        const assetPath = path.join(REPO_ROOT, 'site', 'public', asset);
        assert.ok(fs.existsSync(assetPath), `Expected canonical asset at ${assetPath}`);
      }
    });

    it('should provide site/public/favicon.svg with valid SVG root and VJ monogram gradients', () => {
      const faviconPath = path.join(REPO_ROOT, 'site', 'public', 'favicon.svg');
      const svgContent = fs.readFileSync(faviconPath, 'utf-8');
      assert.ok(svgContent.includes('<svg'), 'favicon.svg must contain an <svg> root element');
      assert.ok(svgContent.includes('id="v-grad"'), 'favicon.svg must define the V monogram gradient');
      assert.ok(svgContent.includes('id="j-grad"'), 'favicon.svg must define the J monogram gradient');
    });

    it('should reference site/public/avatar.png and site/public/banner.webp in README.md', () => {
      const readmeContent = fs.readFileSync(path.join(REPO_ROOT, 'README.md'), 'utf-8');
      assert.ok(
        readmeContent.includes('site/public/avatar.png'),
        'README.md must reference the circular avatar image at "site/public/avatar.png"'
      );
      assert.ok(
        readmeContent.includes('site/public/banner.webp'),
        'README.md must reference the panoramic hero banner at "site/public/banner.webp"'
      );
    });
  });

  describe('Edge Cases & Failure Modes', () => {
    it('should keep site/public/banner.webp <= 5KB (5,120 bytes)', () => {
      const bannerWebpPath = path.join(REPO_ROOT, 'site', 'public', 'banner.webp');
      const stats = fs.statSync(bannerWebpPath);
      assert.ok(
        stats.size <= 5 * 1024,
        `Expected banner.webp size <= 5120 bytes, got ${stats.size} bytes`
      );
    });

    it('should not use inline style= attributes on <img> tags in README.md (GitHub Sanitizer)', () => {
      const readmeContent = fs.readFileSync(path.join(REPO_ROOT, 'README.md'), 'utf-8');
      assert.ok(
        !/(<img\b[^>]*\bstyle\s*=)/i.test(readmeContent),
        'README.md must not use inline style= attributes on <img> tags (GitHub Sanitizer)'
      );
    });
  });
});
