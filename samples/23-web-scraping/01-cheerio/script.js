import axios from 'axios';
import cheerio from 'cheerio';

axios.get('https://example.com').then(response => {
  const $ = cheerio.load(response.data);
  const pageTitle = $('title').text();

  console.log(`Page title: ${pageTitle}`);
}).catch(console.error);
