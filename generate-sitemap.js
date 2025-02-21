import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://Lotusindustrieseps.com';

async function generateSitemap() {
  try {
    const smStream = new SitemapStream({ hostname: baseUrl });
    
    // For HashRouter, use the hash-based paths
    const links = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/#/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/#/contact', changefreq: 'monthly', priority: 0.8 },
    ];

    // Write all the links to the stream
    links.forEach(link => smStream.write(link));
    smStream.end();

    // Generate the XML
    const sitemap = await streamToPromise(smStream);
    
    // Write the sitemap to disk
    createWriteStream('./public/sitemap.xml').write(sitemap.toString());
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();