const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    const videosDir = '/tmp/brr_demo/public/videos/';
    const browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const context = await browser.newContext({
        recordVideo: { dir: videosDir, size: { width: 1280, height: 800 } }
    });
    const page = await context.newPage();

    await page.goto('file:///tmp/brr_demo/mock_veeva_vault_brr003.html');
    await page.waitForTimeout(800);

    // Login
    await page.click('#login-screen button');
    await page.waitForTimeout(700);

    // Search for LIS-010-002
    await page.fill('#mbr-search', 'LIS-010-002');
    await page.waitForTimeout(500);
    await page.click('.toolbar button');
    await page.waitForTimeout(1200);

    // Click v1.4 row (highlighted row)
    await page.click('#row-v14');
    await page.waitForTimeout(1400);

    // Click Version History tab
    await page.click('#tab-vh');
    await page.waitForTimeout(1600);

    // Click Download
    await page.click('.dl-btn');
    await page.waitForTimeout(1000);

    // CRITICAL: context.close() BEFORE browser.close()
    await context.close();
    await browser.close();

    // Rename the auto-generated webm
    const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.webm'));
    // Find the one that is NOT brr_001
    const target = path.join(videosDir, 'brr_003_veeva_vault_version_check.webm');
    const unnamedFiles = files.filter(f => f !== 'brr_001_veeva_vault_mbr_retrieval.webm' && f !== 'brr_003_veeva_vault_version_check.webm');
    if (unnamedFiles.length > 0) {
        const newest = unnamedFiles.sort((a, b) => {
            return fs.statSync(path.join(videosDir, b)).mtimeMs - fs.statSync(path.join(videosDir, a)).mtimeMs;
        })[0];
        fs.renameSync(path.join(videosDir, newest), target);
        console.log('Video 2 saved:', target);
    } else {
        console.error('No unnamed webm file found after recording');
        process.exit(1);
    }
})();
