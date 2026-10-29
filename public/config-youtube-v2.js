// Ad links such as ?autoplay=solo-una-fan start the featured video muted.
// Browsers generally block automatic playback with sound.
const soloUnaFanParams = new URLSearchParams(window.location.search);
const soloUnaFanAutoplay = ['autoplay', 'play', 'video', 'watch']
  .some((key) => /^(1|true|yes|solo[-_ ]?una[-_ ]?fan)$/i.test(soloUnaFanParams.get(key) || ''));
const soloUnaFanEmbed = 'https://www.youtube.com/embed/W931aUJumCY?rel=0' +
  (soloUnaFanAutoplay ? '&autoplay=1&mute=1&playsinline=1' : '');

window.SITE_CONFIG = {
  spotifyEmbeds: [
  {
    title: "Solo Una Fan",
    src: soloUnaFanEmbed,
    watchUrl: "https://www.youtube.com/watch?v=W931aUJumCY",
    height: 360,
    platform: "YouTube"
  }
],

  videos: [
    {
      id: "kahit-bawal",
      title: "Kahit Bawal | Official Music Video",
      youtubeId: "LJq7zmhj9es",
      watchUrl: "https://www.youtube.com/watch?v=LJq7zmhj9es",
      type: "youtube"
    },
    {
      id: "san-antonio-austin",
      title: "San Antonio - Austin | Official Music Video",
      youtubeId: "4j-M0Drja54",
      watchUrl: "https://www.youtube.com/watch?v=4j-M0Drja54&list=RD4j-M0Drja54&start_radio=1",
      type: "youtube"
    },
    {
      id: "finally-see",
      title: "Finally See | Official Music Video",
      youtubeId: "BoK1ilcryNg",
      watchUrl: "https://www.youtube.com/watch?v=BoK1ilcryNg&list=RDBoK1ilcryNg&start_radio=1",
      type: "youtube"
    },
    {
      id: "philippines-cha-cha",
      title: "Philippines Cha Cha | Official Music Video",
      description:
        "A vibrant celebration of Filipino culture featuring tropical beaches, waterfalls, traditional scenery, and energetic cha-cha rhythms. Performed by Venus Niebres Taylor.",
      youtubeId: "un7w28joPts",
      watchUrl: "https://www.youtube.com/watch?v=un7w28joPts&list=RDun7w28joPts&start_radio=1",
      type: "youtube"
    }
  ]
};
