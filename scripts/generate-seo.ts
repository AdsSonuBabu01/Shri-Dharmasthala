import fs from 'fs';
import path from 'path';
import { generateSitemapXml, generateRobotsTxt, buildSitemapEntries } from '../src/utils/sitemapGenerator';
import { GLOBAL_CONFIG } from '../src/config/global';

const publicDir = path.resolve('public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const domain = GLOBAL_CONFIG.siteUrl || 'https://shridharmasthala.org';

// Generate sitemap.xml
const xml = generateSitemapXml(domain);
const entries = buildSitemapEntries(domain);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');

console.log(`✅ Successfully generated public/sitemap.xml with ${entries.length} unique URLs.`);

// Generate robots.txt
const robots = generateRobotsTxt(domain);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');

console.log(`✅ Successfully generated public/robots.txt referencing ${domain}/sitemap.xml.`);

// Generate .htaccess for Hostinger / Apache SPA rewrite fallback
const htaccess = `# Hostinger / Apache SPA Rewrite Rules for Single Page Application Routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Serve existing files and directories directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Serve static sitemap and robots
  RewriteRule ^sitemap\\.xml$ sitemap.xml [L]
  RewriteRule ^robots\\.txt$ robots.txt [L]

  # Fallback all other routes (such as /blog/*, /blog, /place/*) to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Options
Options -Indexes

# Default Encoding
AddDefaultCharset UTF-8

# Enable Gzip/Deflate Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Enable Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
`;

fs.writeFileSync(path.join(publicDir, '.htaccess'), htaccess, 'utf8');
console.log(`✅ Successfully generated public/.htaccess for Hostinger Apache SPA fallback routing.`);
