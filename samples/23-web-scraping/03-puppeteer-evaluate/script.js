import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://example.com');

await page.type('#username', 'myusername');
await page.type('#password', 'mypassword');
await page.click('#login-button');

const title = await page.evaluate(() => document.title);
console.log(title);

const listItems = await page.evaluate(() =>
  Array.from(document.querySelectorAll('.list-item')).map(item => item.textContent)
);
console.log(listItems);