// pages/api/scrape.js
const puppeteer = require('puppeteer-core');

const SBR_WS_ENDPOINT = 'wss://brd-customer-hl_723f7de9-zone-pricehwak:y9oy41j60wbm@brd.superproxy.io:9222';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    console.log('Connecting to Scraping Browser...');
    const browser = await puppeteer.connect({
        browserWSEndpoint: SBR_WS_ENDPOINT,
    });
    try {
      const page = await browser.newPage();
      await page.goto(url, { timeout: 50000 }); // Set a timeout of 30 seconds
      
        console.log('Navigated! Scraping page content...');
        const title = await page.evaluate(() => {
          const titleElement = document.querySelector('#productTitle, .VU-ZEz, .product-title, .a-size-large, .product-title-word-break');
          return titleElement ? titleElement.innerText.trim() : null;
        });
        const price = await page.evaluate(() => {
          const priceElement = document.querySelector('.a-price-whole, .Nx9bqj, .CxhGGd, .money');
          return priceElement ? priceElement.innerText.trim() : null;
        });
        const image = await page.evaluate(() => {
          const imageElement = document.querySelector('.imgTagWrapper img, .a-dynamic-image, .a-stretch-horizontal, .school-image, .DByuf4, .IZexXJ, .jLEJ7H, .product-gallery--loaded-image');
          return imageElement ? imageElement.src : null;
        });
        await browser.close();
        res.status(200).json({ title, price, image });
    } catch (error) {
        console.error('Error scraping page content:', error);
        await browser.close();
        res.status(500).json({ message: 'Failed to scrape the data', error });
    }
  } catch (error) {
    console.error('Error connecting to Scraping Browser:', error);
    res.status(500).json({ message: 'Failed to connect to Scraping Browser', error });
  }
}
