// screenshot-projects.mjs
// Run: node screenshot-projects.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'public', 'projects');
fs.mkdirSync(OUT, { recursive: true });

const sites = [
  // Enterprise
  { file: 'grosvenor.png',    url: 'https://www.grosvenorcasinos.com/' },
  { file: 'bella.png',        url: 'https://www.bellacasino.com/' },
  { file: 'spinandwin.png',   url: 'https://www.spinandwin.com/' },
  { file: 'spendmanager.png', url: 'https://www.spendmanager.co.za/' },
  { file: 'usb-ed.png',       url: 'https://applications.usb-ed.com/?iID=c9a37630-0836-e511-80c8-005056b8008e' },
  { file: 'presles.png',      url: 'https://online.presles.co.za/landing' },
  { file: 'cem.png',          url: 'http://events.engagementfactory.com/cem' },
  { file: 'ricoh.png',        url: 'https://www.ricoh.co.uk/' },
  { file: 'thales.png',       url: 'https://www.thalesgroup.com/en' },
  { file: 'mclaren.png',      url: 'https://www.mclaren.com/' },
  // Personal
  { file: 'bakkieoffload.png',  url: 'https://bakkieoffload.com/' },
  { file: 'mboweezyhub.png',    url: 'https://www.mboweezyhub.co.za/' },
  { file: 'magonamedia.png',    url: 'https://magonamedia.co.za/' },
  { file: 'shosholoza.png',     url: 'https://shosholozafc.org.za/login' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  });

  for (const site of sites) {
    const dest = path.join(OUT, site.file);
    if (fs.existsSync(dest)) { console.log(`  SKIP  ${site.file}`); continue; }
    const page = await ctx.newPage();
    try {
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      // dismiss cookie banners if possible
      try { await page.keyboard.press('Escape'); } catch {}
      await page.waitForTimeout(1800);
      await page.screenshot({ path: dest, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`  ✓  ${site.file}`);
    } catch (err) {
      console.warn(`  ✗  ${site.file}  (${err.message.slice(0, 80)})`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nDone!');
})();
