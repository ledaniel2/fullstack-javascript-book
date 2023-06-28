import {Builder, By, Key} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

let driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();

async function automateLogin() {
  await driver.get('https://example.com/login');

  await driver.findElement(By.id('username')).sendKeys('myusername', Key.RETURN);
  await driver.findElement(By.id('password')).sendKeys('mypassword', Key.RETURN);

  await driver.findElement(By.id('login-button')).click();

  // Wait until the redirect is done
  await driver.wait(until.urlContains('dashboard'), 5000);
}

// Go to page
await page.goto('https://example.com');

// Wait for the content to load
await page.waitForSelector('#dynamic-content');

// Extract the content
const dynamicContent = await page.evaluate(() => document.querySelector('#dynamic-content').innerText);

await page.goto('https://example.com');
await page.waitForTimeout(2000);  // Wait for 2 seconds

const content = await page.evaluate(() => document.querySelector('.ajax-content').innerText);

console.log(content);
