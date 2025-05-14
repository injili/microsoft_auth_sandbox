const puppeteer = require("puppeteer");

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.mobile.de");
  await page.screenshot({ path: "example.png", fullPage: true });
  await browser.close();
}

start();
