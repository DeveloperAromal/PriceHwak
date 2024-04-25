import puppeteer from 'puppeteer';

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
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    const title = await page.evaluate(() => {
      const titleElement = document.querySelector('#productTitle, .VU-ZEz');
      return titleElement ? titleElement.innerText.trim() : null;
    });
    const price = await page.evaluate(() => {
      const priceElement = document.querySelector('.a-price-whole, .Nx9bqj, .CxhGGd');
      return priceElement ? priceElement.innerText.trim() : null;
    });

    const image = await page.evaluate(() => {
      const imageElement = document.querySelector('.imgTagWrapper img, .DByuf4, .IZexXJ, .jLEJ7H');
      return imageElement ? imageElement.src : null;
    });

    await browser.close();

    res.status(200).json({ title, price, image });
  } catch (error) {
    res.status(500).json({ message: 'Failed to scrape the data', error });
  }
}
