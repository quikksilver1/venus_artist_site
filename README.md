# Venus Niebres Taylor Artist Website

A zero-cost, Vercel-ready artist website for **Venus Niebres Taylor**.

## What this site supports

- Spotify embeds for artist, album, playlist, or tracks
- Future music video embeds from YouTube
- Artist bio section
- Contact/social links
- Static deployment to Vercel through GitHub
- Optional Python local preview server

## Local preview

```bash
python tools/local_server.py
```

Open:

```text
http://localhost:8000
```

## Update Spotify content

Edit:

```text
public/config.js
```

Replace this placeholder:

```js
src: "https://open.spotify.com/embed/artist/ARTIST_ID_HERE?utm_source=generator"
```

with the Spotify embed URL copied from Spotify's Share > Embed menu.

## Add music videos later

In `public/config.js`, replace the empty video `src` with a YouTube embed URL:

```js
{
  title: "Official Music Video",
  src: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
}
```

## GitHub upload

```bash
git init
git add .
git commit -m "Initial Venus artist website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/venus-niebres-taylor-site.git
git push -u origin main
```

## Vercel deployment

1. Create/login to a Vercel account.
2. Choose **Add New Project**.
3. Import the GitHub repository.
4. Framework preset: **Other**.
5. Build command: leave blank.
6. Output directory: leave blank.
7. Deploy.

## Notes

This is intentionally static because static sites are the simplest free deployment path. Python is included only for local preview tooling. A backend can be added later if you need forms, analytics processing, fan signup storage, or gated content.
