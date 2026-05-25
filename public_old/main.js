const config = window.SITE_CONFIG || { spotifyEmbeds: [], videos: [] };

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

document.getElementById('year').textContent = new Date().getFullYear();

function createSpotifyEmbed(item) {
  const card = document.createElement('article');
  card.className = 'embed-card';
  card.innerHTML = `
    <h3>${item.title}</h3>
    <iframe style="border-radius:12px" src="${item.src}" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `;
  return card;
}

function createVideoEmbed(item) {
  const card = document.createElement('article');
  card.className = 'video-card';
  if (!item.src) {
    card.innerHTML = `<div class="video-placeholder">Coming Soon</div><h3>${item.title}</h3>`;
    return card;
  }
  card.innerHTML = `
    <div class="video-frame"><iframe src="${item.src}" title="${item.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
    <h3>${item.title}</h3>
  `;
  return card;
}

document.getElementById('spotify-grid').append(...config.spotifyEmbeds.map(createSpotifyEmbed));
document.getElementById('video-grid').append(...config.videos.map(createVideoEmbed));
