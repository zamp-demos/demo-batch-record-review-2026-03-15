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

    await page.goto('file:///tmp/brr_demo/mock_veeva_vault_brr001.html');
    await page.waitForTimeout(800);

    // Login
    await page.click('#login-screen button');
    await page.waitForTimeout(700);

    // Click Master Batch Records in sidebar
    await page.click('#mbr-link');
    await page.waitForTimeout(900);

    // Search for ATV-040-003
    await page.fill('#mbr-search', 'ATV-040-003');
    await page.waitForTimeout(500);
    await page.click('.toolbar button');
    await page.waitForTimeout(1200);

    // Click first result row
    await page.click('#mbr-rows tr:first-child');
    await page.waitForTimeout(1500);

    // Click Download
    await page.click('.dl-btn');
    await page.waitForTimeout(1000);

    // CRITICAL: context.close() BEFORE browser.close()
    await context.close();
    await browser.close();

    // Rename the auto-generated webm
    const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.webm'));
    if (files.length > 0) {
        const newest = files.sort((a, b) => {
            return fs.statSync(path.join(videosDir, b)).mtimeMs - fs.statSync(path.join(videosDir, a)).mtimeMs;
        })[0];
        const target = path.join(videosDir, 'brr_001_veeva_vault_mbr_retrieval.webm');
        if (newest !== 'brr_001_veeva_vault_mbr_retrieval.webm') {
            fs.renameSync(path.join(videosDir, newest), target);
        }
        console.log('Video 1 saved:', target);
    } else {
        console.error('No webm file found after recording');
        process.exit(1);
    }
})();
