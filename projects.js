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
      { src: "media/thanjavur.mp4",    card: "media/thanjavur-card.mp4",    label: "Thanjavur",          caption: "Brihadeeswarar (Thanjavur) temple — dense reconstruction fly-through." },
      { src: "media/sacrecoeur.mp4",   card: "media/sacrecoeur-card.mp4",   label: "Sacré-Cœur",         caption: "Sacré-Cœur basilica, Paris." },
      { src: "media/brussels.mp4",     card: "media/brussels-card.mp4",     label: "Brussels",           caption: "Grand-Place, Brussels." },
      { src: "media/palace.mp4",       card: "media/palace-card.mp4",       label: "Palace of Fine Arts", caption: "Palace of Fine Arts, San Francisco." },
      { src: "media/templesplat.mp4",  card: "media/templesplat-card.mp4",  label: "Gaussian Splat", splat: true, caption: "Gaussian splat of the Thanjavur temple." }
    ],
    body: [
      { p: "A set of end-to-end 3D reconstructions built with <a href='https://github.com/borglab/gtsfm' target='_blank' rel='noopener'>GTSFM</a> (Georgia Tech Structure-from-Motion) — camera poses and point clouds recovered from photographs, with bundle adjustment and pose-graph optimization running on <code>GTSAM</code>'s factor-graph backend" },
      { h: "Scenes" },
      { p: "<strong>Thanjavur</strong> — the Brihadeeswarar temple in Tamil Nadu. <strong>Sacré-Cœur</strong> — a classic photo-tourism scene in Paris. <strong>Brussels</strong> — the Grand-Place." },
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
      { p: "A liquid-simulation reveal effect layered over a map." },
      { h: "What we built" },
      { p: " I was inspired by the noir movie Chinatown, the California Water Wars, and all the cool map based storytelling I had been exposed to at ESRI. I came up with this idea of the User uncovering a map at the bottom of the ocean while diving, it's essentially a Navier Stokes Fluid Simulation running over an image where the image pixel colors are treated as dye in the liquid" },
      { h: "Tech" },
      { p: "JS, WebGL" }
    ]
  },

  {
    id: "burn-surge",
    title: "Burn Surge Ops",
    subtitle: "Surge planning for burn mass-casualty events · GIS + WebGL",
    tag: "GIS / WebGL",
    date: "2025 · Esri Weekend of Innovation",
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
      { p: "Burn injuries are the most painful and heinous injuries we can receive, and unfortunately they usually happen in large amounts all at once. Burn units are extremely expensive to staff and operate — there's usually only one or two for the whole state, and nationwide there are only about <strong>300 burn surgeons and 300 burn nurses</strong>. An enormous amount of specialized infrastructure and staff is needed just to stabilize a single burn patient." },
      { p: "So burn units have to plan with and train regional hospitals to be able to ramp up during a massive burn-casualty event — building enough capacity to support a burn patient for the first 24 hours, so the burn unit can focus on the most severe patients, stabilize them, and fly them out to the nearest open burn center. Training with regional hospitals is extremely expensive: burn-unit staff are highly paid pros, you bring medical staff in on their off days paying overtime, and you pay for infrastructure and supplies that have expiry dates and will probably never be used." },
      { p: "It truly is a hard resource-allocation problem, and burn units currently take a very naive approach — just going down an arbitrary list of thousands of hospitals running very general drills. It's ineffective and inefficient. We brought GIS into the mix, focusing on Southern California (Orange, Los Angeles, Riverside, and San Bernardino counties), to incorporate geographic and historical knowledge and turn that scarce training time into specific, high-impact directives." },
      { p: "LA County is also pioneering the <strong>Burn Resource Center Program</strong>, where non-specialized hospitals contract with the county for extra funding, training, tools, and equipment — in exchange for maintaining the ability to staff a burn patient for 72 hours by keeping up continuing education, accreditation, and audits. Burn Surge Ops is built to support exactly this kind of planning and accreditation work." },

      { h: "What it does" },
      { p: "Users pick from prebuilt mass-casualty scenarios, choose which hospitals to include in the routing analysis (to simulate hospitals being unavailable due to disaster or evacuation), and run a routing analysis driven by a custom cost function. It matches and scores patient&rarr;hospital routes on drive time plus attributes like total burn surface area, hospital capability, pediatric capability, bed-count score, and patient criticality — then surfaces the <strong>top three hospital assignments</strong> with their scores." },
      { p: "You can toggle drive-time service areas from the incident, and a layer of general (non-burn-ready) hospitals, to spot facilities that are good candidates to convert into Burn Resource Centers. An LLM-backed report generator then produces an action plan with concrete directives — for example, a hospital that has faced evacuations in the past should rehearse a route to a farther-away center in case of an unexpected evacuation order. The point is to make split-second, multi-factor decisions ahead of time, and to drive monthly drills and outreach." },

      { h: "How we built it" },
      { p: "The map and analysis run on the <strong>ArcGIS Maps SDK for JavaScript</strong>, including a <strong>custom WebGL layer view</strong> (the animation on the card) for the incident and route visualization, plus service-area analysis using Network Analyst methods and Service Area rings — the same GIS tooling found in ArcGIS Pro. A <strong>FastAPI</strong> backend wires up the LLM report generator." },

      { h: "What I'm proud of & what's next" },
      { p: "The part we're proudest of is the custom weighting in the scoring system and how it shifts routes between adult and pediatric scenarios. Next, we want to work with professionals in the burn-response community to refine those weights, and get these maps into the hands of Southern California EMS to aid evacuation transfers and accreditation upskilling — especially after the devastating 2025 fires." },

      { h: "Tech" },
      { p: "<code>ArcGIS Maps SDK for JavaScript</code>, custom <code>WebGL</code> layer views, Network Analyst / Service Area analysis, <code>FastAPI</code>, and an LLM report generator." },

      { h: "Team" },
      { p: "Built at <strong>Esri's Weekend of Innovation 2025</strong> with Angelica Cardenas, Albert Wang, Alex Kim, and Grace Payne." }
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
