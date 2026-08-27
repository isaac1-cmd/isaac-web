BLAKMIXED ENTERTAINMENT — OPTIMIZED DEPLOYMENT PACKAGE

This version is optimized for faster loading and Netlify deployment while keeping the existing website structure and functionality.

WHAT WAS OPTIMIZED
• Large JPG/PNG assets converted to compressed WebP.
• Images resized to a maximum practical display size instead of loading 4K/6K originals.
• Image payload reduced dramatically (the original archive was about 136 MB; the optimized image set is about 2.7 MB).
• Gallery images use lazy loading and async decoding.
• Browser caching headers added for assets, CSS and JavaScript.
• Removed the external Google Fonts request so the site can render without waiting for a third-party font server.
• Cleaned image filenames and fixed extension/case mismatches.
• Kept the website as a static site: no build step is required.

NETLIFY DEPLOYMENT
1. Unzip this folder.
2. Upload the folder to a GitHub repository.
3. In Netlify, choose Add new project / Import an existing project.
4. Select the GitHub repository.
5. Build command: leave blank.
6. Publish directory: .
7. Deploy.
8. When you buy your domain, add it in Netlify under Domain management and follow Netlify's DNS instructions.

CUSTOM DOMAIN
You do not need to change the website code just because you get a domain later. Connect the domain in Netlify and Netlify will serve this same site on it.

EDITING IMAGES
All optimized images are in assets/.
To change an event image, replace the corresponding WebP file or update its path in script.js.
The main editable event/photo data is at the top of script.js in the DATA object.

TICKET LINK
Change upcoming.ticketUrl in script.js to your real ticket/reservation/payment URL.

CONTACT EMAIL
Change DATA.contactEmail in script.js to the actual BLAKMIXED email address.

NETLIFY FORMS
The ticket reservation form and enquiry forms are marked for Netlify Forms. After deployment, enable/confirm form notifications in the Netlify dashboard.

IMPORTANT
Do not delete netlify.toml. It contains the deployment publish setting and long-term caching rules for the optimized assets.
