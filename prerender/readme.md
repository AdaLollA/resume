store prerender data from https://prerender.io/ here so that crawlers can access them

1. server the application
2. copy and paste the inspector <html> </html>
3. set routes in firebase.json
4. set routes in sitemap.xml
5. on every build:
    - copy sitemap xml to www
    - copy prerender folder to www
