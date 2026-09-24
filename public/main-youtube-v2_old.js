const config = window.SITE_CONFIG || { spotifyEmbeds: [], videos: [] };

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function createSpotifyEmbed(item) {
  const card = document.createElement('article');
  card.className = item.image ? 'embed-card embed-card-featured' : 'embed-card';
  const height = Number.isFinite(item.height) ? item.height : 352;

  if (item.image) {
    card.innerHTML = `
      <div class="spotify-feature">
        <button class="feature-art-link" type="button" aria-label="Play ${item.title}">
          <img class="spotify-feature-art" src="${item.image}" alt="${item.title} promotional artwork" loading="eager">
          <span class="feature-art-play" aria-hidden="true">▶ Play Video</span>
        </button>
        <div class="spotify-feature-player">
          <p class="eyebrow">Full Song on ${item.platform || 'Spotify'}</p>
          <h3>${item.title}</h3>
          <iframe class="featured-song-player" style="border-radius:12px" src="${item.src}" width="100%" height="${height}" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy" title="${item.title} on ${item.platform || 'Spotify'}"></iframe>
          ${item.watchUrl ? `<a class="youtube-watch-link" href="${item.watchUrl}" target="_blank" rel="noopener noreferrer">Listen directly on YouTube</a>` : ''}
        </div>
      </div>
    `;

    const artworkButton = card.querySelector('.feature-art-link');
    const featuredPlayer = card.querySelector('.featured-song-player');

    artworkButton?.addEventListener('click', () => {
      const playUrl = new URL(item.src, window.location.href);
      playUrl.searchParams.set('autoplay', '1');
      playUrl.searchParams.set('playsinline', '1');
      featuredPlayer.src = playUrl.toString();
      featuredPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    return card;
  }

  card.innerHTML = `
    <h3>${item.title}</h3>
    <iframe style="border-radius:12px" src="${item.src}" width="100%" height="${height}" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="${item.title} on Spotify"></iframe>
  `;
  return card;
}

function createVideoEmbed(item) {
  const card = document.createElement('article');
  card.className = 'video-card';

  if (!item.youtubeId && !item.src) {
    card.innerHTML = `<div class="video-placeholder">Coming Soon</div><h3>${item.title}</h3>`;
    return card;
  }

  const isYoutube = item.type === 'youtube' || Boolean(item.youtubeId);

  if (isYoutube) {
    const videoId = item.youtubeId || extractYouTubeId(item.src);
    const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0&modestbranding=1`;
    const watchUrl = item.watchUrl || `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;

    card.innerHTML = `
      <div class="video-frame">
        <iframe
          src="${embedUrl}"
          title="${item.title}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <h3>${item.title}</h3>
      ${item.description ? `<p class="video-description">${item.description}</p>` : ''}
      <a class="youtube-watch-link" href="${watchUrl}" target="_blank" rel="noopener noreferrer">
        Watch directly on YouTube
      </a>
    `;
    return card;
  }

  const isMp4 = item.type === 'mp4' || item.src.toLowerCase().endsWith('.mp4');

  if (isMp4) {
    card.innerHTML = `
      <div class="video-frame local-video-frame">
        <video controls preload="metadata" playsinline>
          <source src="${item.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <h3>${item.title}</h3>
    `;
    return card;
  }

  card.innerHTML = `<div class="video-placeholder">Unsupported video</div><h3>${item.title}</h3>`;
  return card;
}

function extractYouTubeId(url = '') {
  const match = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : url;
}

document.getElementById('spotify-grid').append(...config.spotifyEmbeds.map(createSpotifyEmbed));
document.getElementById('video-grid').append(...config.videos.map(createVideoEmbed));

// YouTube embed renderer v2 - cache-proof filename
