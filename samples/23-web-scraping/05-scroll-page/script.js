async function scrapeInfiniteScrollPage() {
  let previousHeight;

  while (true) {
    previousHeight = await page.evaluate('document.body.scrollHeight');
    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
    await page.waitForTimeout(1000); // Pause to allow loading
  }

  // After the loop has finished, we can scrape the loaded content as usual...
}
