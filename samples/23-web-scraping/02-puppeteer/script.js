import puppeteer from 'puppeteer';

async function automateTask() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');
  await page.type('#username', 'myusername');
  await page.type('#password', 'mypassword');
  await page.click('#login-button');

  // Wait for navigation
  await page.waitForNavigation();

  await browser.close();
}

automateTask().catch(console.error);
