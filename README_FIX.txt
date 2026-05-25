# Venus Niebres Taylor Website - Restored Project

This package was rebuilt from your old `public_old.zip` so your previous work is preserved.

## What is included

```
venus_artist_site_restored/
└── public/
    ├── index.html
    ├── about.html
    ├── about/
    │   └── index.html
    ├── styles.css
    ├── config.js
    ├── main.js
    └── assets/
        ├── favicon.svg
        ├── kahit-bawal-cover.jpg
        ├── venus-resized-full.jpg
        ├── venus-resized.jpg
        └── venus.jpg
```

## What I fixed

- Kept the old home page structure.
- Kept Spotify config and `main.js`.
- Kept the hero card and image assets.
- Kept the professional standalone About page.
- Fixed the broken About navigation in `index.html`.
- Fixed About page relative paths so the photo loads from `about/`.
- Added both:
  - `/about/`
  - `/about.html`

That way either route works.

## Local test

Open PowerShell in:

```
venus_artist_site_restored/public
```

Run:

```powershell
python -m http.server 8000
```

Test:

```
http://localhost:8000/
http://localhost:8000/about/
http://localhost:8000/about.html
```

## Vercel

Keep Vercel Root Directory set to:

```
public
```

Then commit/push the contents of this package.
