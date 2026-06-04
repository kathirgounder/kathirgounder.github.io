/* ============================================================
   projects.js — single source of truth for the portfolio.

   To add a project:  copy one block below, give it a new
   unique `id`, and fill in the fields. The card on the home
   page and its detail page are generated automatically.

   Fields:
     id        unique slug, used in the URL  (?id=burn-surge)
     title     shown on the card + as the page heading
     subtitle  one line under the title
     tag       small pill on the card (e.g. "WebGL")
     date      free text, shown on the detail page
     poster    (optional) a still image shown if needed
     cardVideo path to the looping preview used on the card
     links     { github, codepen, live } — omit any you don't have
     videos    [{ src, caption }]  shown on the detail page
     body      array of blocks. Each block is either:
                 { p: "a paragraph of text (HTML allowed)" }
                 { h: "a subheading" }
   ============================================================ */

const PROJECTS = [
  {
    id: "reconstructions",
    title: "3D Reconstructions",
    subtitle: "GTSFM — Thanjavur · Sacré-Cœur · Brussels",
    tag: "3D / SfM",
    date: "2025",
    cardVideo: "media/thanjavur-card.mp4",
    cluster: true,   // render the videos as an overlapping, simultaneously-playing cluster
    links: {
      github: "https://github.com/borglab/gtsfm",
      codepen: "",
      live: ""
    },
    videos: [
      { src: "media/thanjavur.mp4",    card: "media/thanjavur-card.mp4",    label: "Thanjavur",      caption: "Brihadeeswarar (Thanjavur) temple — dense reconstruction fly-through." },
      { src: "media/sacrecoeur.mp4",   card: "media/sacrecoeur-card.mp4",   label: "Sacré-Cœur",     caption: "Sacré-Cœur basilica, Paris." },
      { src: "media/brussels.mp4",     card: "media/brussels-card.mp4",     label: "Brussels",       caption: "Grand-Place, Brussels." },
      { src: "media/templesplat.mp4",  card: "media/templesplat-card.mp4",  label: "Gaussian Splat", caption: "Gaussian splat of the Thanjavur temple." }
    ],
    body: [
      { p: "A set of end-to-end 3D reconstructions built with <a href='https://github.com/borglab/gtsfm' target='_blank' rel='noopener'>GTSFM</a> (Georgia Tech Structure-from-Motion) — camera poses and point clouds recovered from photographs, with bundle adjustment and pose-graph optimization running on <code>GTSAM</code>'s factor-graph backend. Replace this intro with your own framing." },
      { h: "Scenes" },
      { p: "<strong>Thanjavur</strong> — the Brihadeeswarar temple in Tamil Nadu. <strong>Sacré-Cœur</strong> — a classic photo-tourism scene in Paris. <strong>Brussels</strong> — the Grand-Place. For each, note the image count, the front-end matcher, and the reprojection error." },
      { h: "Pipeline" },
      { p: "Front-end correspondences feed global pose estimation and bundle adjustment built on <code>GTSAM</code> factor graphs. Add detail on the matcher, densification, and any meshing step. Drop in more scenes via the <code>videos</code> array in <code>projects.js</code>." },
      { h: "Tech" },
      { p: "<code>GTSFM</code>, <code>GTSAM</code>, Python, point-cloud tooling." }
    ]
  },

  {
    id: "liquid-maps",
    title: "Liquid Maps",
    subtitle: "WebGL Liquid Sim + Map Discovery Effect",
    tag: "WebGL",
    date: "2025",
    cardVideo: "media/liquid-card.mp4",
    links: {
      github: "",
      codepen: "https://codepen.io/Kathirvel-Gounder/pen/pvjNQOR",
      live: ""
    },
    videos: [
      { src: "media/liquid.mp4", caption: "Liquid simulation revealing the map underneath." }
    ],
    body: [
      { p: "A liquid-simulation reveal effect layered over a map. Replace with your own description of the idea and goal." },
      { h: "What we built" },
      { p: "Explain the simulation technique and how the discovery/reveal interaction works." },
      { h: "Tech" },
      { p: "List the stack here." }
    ]
  },

  {
    id: "burn-surge",
    title: "Burn Surge Ops",
    subtitle: "Custom WebGL Layer",
    tag: "WebGL",
    date: "2025",
    cardVideo: "media/finalBurnSurgeOperations.mp4",
    links: {
      github: "https://github.com/kathirgounder/BurnSurgeOperations",
      codepen: "",
      live: ""
    },
    videos: [
      { src: "media/finalBurnSurgeOperations.mp4", caption: "Final render of the Burn Surge operations layer." }
    ],
    body: [
      { p: "Short summary of what this project is and the problem it solves. Replace this text with your own write-up." },
      { h: "What we built" },
      { p: "Describe the approach: the custom WebGL layer, how data flowed in, and anything notable about the implementation." },
      { h: "Tech" },
      { p: "List the stack here — e.g. <code>WebGL</code>, <code>deck.gl</code>, <code>Mapbox</code>, custom shaders." }
    ]
  }
];

/* ============================================================
   Photography — drop image files in media/photos/ and add a
   row here. `span` (optional) lets a photo take 2 columns for
   a looser, gallery feel: span: 2
   ============================================================ */
// Order is tuned so similar / same-scene shots aren't placed next to each other.
const PHOTOS = [
  { src: "media/photos/photo-1.jpg",  caption: "" },  // foggy field
  { src: "media/photos/photo-8.jpg",  caption: "" },  // Cathedral Peak
  { src: "media/photos/photo-9.jpg",  caption: "" },  // harbor boats
  { src: "media/photos/photo-5.jpg",  caption: "" },  // hikers on trail
  { src: "media/photos/photo-4.jpg",  caption: "" },  // Point Reyes lighthouse
  { src: "media/photos/photo-13.jpg", caption: "" },  // Banner Peak (vintage)
  { src: "media/photos/photo-2.jpg",  caption: "" },  // sunset silhouette
  { src: "media/photos/photo-6.jpg",  caption: "" },  // boulder portrait (smoky Sierra)
  { src: "media/photos/photo-10.jpg", caption: "" },  // Crater Lake
  { src: "media/photos/photo-11.jpg", caption: "" },  // redwoods
  { src: "media/photos/photo-7.jpg",  caption: "" },  // hazy lake (smoky Sierra)
  { src: "media/photos/photo-12.jpg", caption: "" },  // snowy range (vintage)
  { src: "media/photos/photo-3.jpg",  caption: "" },  // swimmers / alpine lake
];

/* Expose for both pages (loaded as a plain script, file:// friendly). */
window.PROJECTS = PROJECTS;
window.PHOTOS = PHOTOS;
