export type ProjectCategory =
  | "Music Video"
  | "Spec Ad"
  | "Branded Short Film"
  | "Documentary Short"
  | "Commercial Campaign"
  | "Commercial / Spec"
  | "Editing"
  | "AI / VFX"
  | "Fashion / Campaign"
  | "Documentary"
  | "Archive";

export type Credit = {
  label: string;
  value: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  orientation?: "wide" | "portrait" | "square";
};

export type ProjectVideo = {
  title: string;
  url: string;
  embedUrl: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  type: ProjectCategory;
  location?: string;
  summary: string;
  brief: string;
  build: string;
  result: string;
  credits: Credit[];
  featured?: boolean;
  priority: number;
  sourceUrl?: string;
  finalVideoUrl?: string;
  videoEmbedUrl?: string;
  previewGif?: string;
  additionalVideos?: ProjectVideo[];
  posterImage?: ProjectImage;
  gallery?: ProjectImage[];
  posterStatus: string;
  palette: {
    a: string;
    b: string;
    c: string;
  };
};

const sourceBase = "https://readymag.website/u2531806978/6385106";
const vimeoEmbed = (id: string) => `https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`;

export const projects: Project[] = [
  {
    slug: "nike-run-for-it",
    title: "Run For It",
    client: "Nike",
    year: "2025",
    role: "Director, DOP, Editor, Producer",
    type: "Spec Ad",
    location: "Springfield, Massachusetts",
    summary:
      "Run For It is a spec commercial built around movement through Springfield. The film follows two runners across familiar city landmarks, using speed, texture, and practical locations to make the city feel larger and more cinematic.",
    brief:
      "Make a spec spot feel larger than the resources behind it while keeping Springfield present in the frame.",
    build:
      "Two runners move through familiar landmarks with fast coverage, practical locations, and a street-level sense of scale.",
    result:
      "A compact commercial piece that sells motion, atmosphere, and local texture without losing the rawness of the production.",
    credits: [
      { label: "Sound Design", value: "Kenneth Psalms & William Landry" },
      { label: "Color", value: "Michael Waddell" },
      { label: "Production", value: "Nate Velasquez" },
    ],
    featured: true,
    priority: 1,
    sourceUrl: `${sourceBase}/nikespec/`,
    finalVideoUrl: "https://vimeo.com/1198629176?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198629176"),
    previewGif: "/media/projects/nike-run-for-it/preview.gif",
    posterImage: {
      src: "/media/projects/nike-run-for-it/yellow-shoes-run.jpg",
      alt: "Runner in yellow Nike shoes moving through Springfield.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/nike-run-for-it/runner-closeup.jpg",
        alt: "Close profile of a runner preparing for the Nike Run For It spec spot.",
        orientation: "wide",
      },
      {
        src: "/media/projects/nike-run-for-it/shoe-stride.jpg",
        alt: "Low angle frame of a runner stepping forward in white Nike shoes.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/nike-run-for-it/yellow-shoes-run.jpg",
        alt: "Runner in yellow Nike shoes moving through Springfield.",
        orientation: "wide",
      },
    ],
    posterStatus: "Run For It still",
    palette: { a: "#f4efe7", b: "#d4ff3f", c: "#e64a2e" },
  },
  {
    slug: "timing-is-everything",
    title: "Timing Is Everything",
    client: "A Ma Maniere x Nike",
    year: "2026",
    role: "Editor",
    type: "Branded Short Film",
    summary:
      "Timing Is Everything follows a chance connection unfolding across a night of movement, conversation, and quiet tension. The edit balances dialogue, voiceover, and visual rhythm to keep the story intimate while maintaining the energy of a branded social film.",
    brief:
      "Shape a branded short around a chance connection without losing the intimacy of the performances.",
    build:
      "Dialogue, voiceover, and visual rhythm carry the movement across one night while keeping the quiet tension intact.",
    result:
      "An intimate branded social film with a clear emotional thread and enough momentum for social delivery.",
    credits: [
      { label: "Editor", value: "Nate Velasquez" },
      { label: "Co-Editor", value: "Ethan Santana" },
      { label: "Sound Design & Mix", value: "Kenneth Psalms & William Landry" },
      { label: "Post-Producer", value: "Tarek Abu Warda" },
      { label: "Color", value: "Michael Waddell" },
      { label: "Post-House", value: "World's End" },
      { label: "Produced By", value: "World's End" },
    ],
    featured: true,
    priority: 4,
    sourceUrl: `${sourceBase}/ammxnike/`,
    finalVideoUrl: "https://vimeo.com/1198760213?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198760213"),
    previewGif: "/media/projects/timing-is-everything/preview.gif",
    posterImage: {
      src: "/media/projects/timing-is-everything/blue-runner-portrait.jpg",
      alt: "Blue-toned portrait frame from Timing Is Everything.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/timing-is-everything/blue-runner-portrait.jpg",
        alt: "Blue-toned portrait frame from Timing Is Everything.",
        orientation: "wide",
      },
      {
        src: "/media/projects/timing-is-everything/car-conversation.jpg",
        alt: "Three women gathered around a car in Timing Is Everything.",
        orientation: "square",
      },
      {
        src: "/media/projects/timing-is-everything/shoe-door-detail.jpg",
        alt: "Close detail of a Nike sneaker stepping out of a car.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/timing-is-everything/sidewalk-shoes.jpg",
        alt: "Nike sneakers and seated movement detail from Timing Is Everything.",
        orientation: "wide",
      },
      {
        src: "/media/projects/timing-is-everything/car-shoe-glitch.jpg",
        alt: "Distorted car and sneaker frame from Timing Is Everything.",
        orientation: "wide",
      },
    ],
    posterStatus: "Timing Is Everything still",
    palette: { a: "#77b7ff", b: "#f4efe7", c: "#5c3cff" },
  },
  {
    slug: "lil-tjay-cant-change",
    title: "Can't Change",
    client: "Lil Tjay",
    year: "2026",
    role: "AI Artist, VFX Artist",
    type: "Music Video",
    summary:
      "Can't Change expands the scale of the original footage through AI generated environments and visual effects. My role focused on building believable animals, aerial elements, and larger cinematic moments while keeping the effects connected to the lighting, movement, and tone of the live action footage.",
    brief:
      "Expand the live action footage into larger cinematic moments without breaking the lighting, movement, or tone.",
    build:
      "AI generated animals, aerial elements, and environment extensions were built to feel connected to the captured footage.",
    result:
      "The finished music video gains a bigger visual scale while keeping the VFX tied to the live action world.",
    credits: [
      { label: "Directed", value: "@jb.tai" },
      { label: "Co-Edited", value: "@iheartxantana from @omen.two" },
      { label: "Co-Edited", value: "@gokilljosh from @omen.two" },
      { label: "Colorist", value: "@whycrxd from @paintersuite" },
      { label: "Visual Effects", value: "@oasisnate" },
      { label: "Title Design", value: "@byhmalik" },
      { label: "Sound Design & Mix", value: "@pslmsmn @williamlandryaudio @prodfedecasais" },
      { label: "VFX Artist", value: "@oasisnate" },
      { label: "Post-Production", value: "@omen.two & @worldsendprod" },
    ],
    featured: true,
    priority: 2,
    sourceUrl: `${sourceBase}/liltjaycantchange/`,
    finalVideoUrl: "https://vimeo.com/1198766682?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198766682"),
    previewGif: "/media/projects/lil-tjay-cant-change/preview.gif",
    posterImage: {
      src: "/media/projects/lil-tjay-cant-change/lion-performance.jpg",
      alt: "Lil Tjay performance frame with a white lion in Can't Change.",
      orientation: "portrait",
    },
    gallery: [
      {
        src: "/media/projects/lil-tjay-cant-change/lion-performance.jpg",
        alt: "Lil Tjay performance frame with a white lion in Can't Change.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/lil-tjay-cant-change/performance-closeup.jpg",
        alt: "Close performance frame from Lil Tjay's Can't Change.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/lil-tjay-cant-change/night-performance.jpg",
        alt: "Night performance frame from Lil Tjay's Can't Change.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/lil-tjay-cant-change/elephant-vfx.jpg",
        alt: "Elephant VFX frame from Lil Tjay's Can't Change.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/lil-tjay-cant-change/aerial-lion.jpg",
        alt: "Aerial lion VFX frame from Lil Tjay's Can't Change.",
        orientation: "wide",
      },
    ],
    posterStatus: "Can't Change still",
    palette: { a: "#e64a2e", b: "#77b7ff", c: "#1c1c1c" },
  },
  {
    slug: "lil-baby-fu2x",
    title: "FU2X",
    client: "Lil Baby",
    year: "2025",
    role: "Editor",
    type: "Music Video",
    summary:
      "A music video edited by Nathan Velasquez.",
    brief:
      "Shape the performance and visual rhythm into a focused final music video.",
    build:
      "Editorial pacing, structure, and performance selection carry the piece around the track's momentum.",
    result:
      "A tight music video edit built around energy, clarity, and replay value.",
    credits: [{ label: "Editor", value: "Nathan Velasquez" }],
    featured: true,
    priority: 6,
    finalVideoUrl: "https://www.youtube.com/watch?v=PDQM23AiARM",
    previewGif: "/media/projects/lil-baby-fu2x/preview.gif",
    posterStatus: "FU2X preview",
    palette: { a: "#e64a2e", b: "#f4efe7", c: "#0b0b0b" },
  },
  {
    slug: "lil-baby-nfl-touchdown",
    title: "Touchdown",
    client: "Lil Baby x NFL",
    year: "2024",
    role: "Editor",
    type: "Music Video",
    summary:
      "A Lil Baby x NFL video edited by Nathan Velasquez.",
    brief:
      "Shape the performance, brand energy, and sports imagery into a focused final edit.",
    build:
      "Editorial rhythm, performance selection, and visual momentum carry the piece between artist and NFL worlds.",
    result:
      "A polished edit connecting music, sports, and campaign energy with a strong visual pace.",
    credits: [{ label: "Editor", value: "Nathan Velasquez" }],
    featured: true,
    priority: 3,
    finalVideoUrl: "https://www.youtube.com/watch?v=LjYgsSzCGZQ",
    previewGif: "/media/projects/lil-baby-nfl-touchdown/preview.gif",
    posterStatus: "Touchdown preview",
    palette: { a: "#77b7ff", b: "#e64a2e", c: "#0b0b0b" },
  },
  {
    slug: "grounded",
    title: "Grounded",
    client: "Botany Scientifics",
    year: "2026",
    role: "Editor",
    type: "Commercial Campaign",
    summary:
      "A four part social campaign for Grounded by Botany Scientifics, built around calm focus, natural energy, and reconnecting with yourself.",
    brief:
      "Build two 60 second hero edits, one centered around a male subject and one around a female subject, while keeping both inside the same brand language.",
    build:
      "The male cut leans reflective and routine based. The female cut feels lighter and more fluid, focusing on movement, texture, warmth, and moments of clarity.",
    result:
      "Both hero edits were adapted into 15 second cutdowns that reduce the story to the strongest product, lifestyle, and emotional beats for social delivery.",
    credits: [
      { label: "Editor", value: "Nate Velasquez" },
      { label: "Sound Design & Mix", value: "Kenneth Psalms & William Landry" },
      { label: "Visual Effects", value: "Kamaal Elmi" },
      { label: "Post-House", value: "World's End" },
    ],
    featured: true,
    priority: 5,
    sourceUrl: "https://www.instagram.com/color____block/",
    finalVideoUrl: "https://vimeo.com/1198797697?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198797697"),
    previewGif: "/media/projects/grounded/preview.gif",
    additionalVideos: [
      {
        title: "Grounded - Campaign Film 02",
        url: "https://vimeo.com/1198797722?fl=pl&fe=ti",
        embedUrl: vimeoEmbed("1198797722"),
      },
      {
        title: "Grounded - Campaign Film 03",
        url: "https://vimeo.com/1198797755?fl=pl&fe=ti",
        embedUrl: vimeoEmbed("1198797755"),
      },
      {
        title: "Grounded - Campaign Film 04",
        url: "https://vimeo.com/1198797756?fl=pl&fe=ti",
        embedUrl: vimeoEmbed("1198797756"),
      },
    ],
    posterImage: {
      src: "/media/projects/grounded/product-grounded.jpg",
      alt: "Grounded by Botany Scientifics product frame.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/grounded/office-focus.jpg",
        alt: "Office lifestyle frame from the Grounded campaign.",
        orientation: "wide",
      },
      {
        src: "/media/projects/grounded/product-grounded.jpg",
        alt: "Grounded product and Botany Scientifics branding.",
        orientation: "wide",
      },
      {
        src: "/media/projects/grounded/paperwork-office.jpg",
        alt: "Paperwork and office pressure frame from the Grounded campaign.",
        orientation: "wide",
      },
      {
        src: "/media/projects/grounded/night-dancer.jpg",
        alt: "Warm night movement frame from the Grounded campaign.",
        orientation: "wide",
      },
      {
        src: "/media/projects/grounded/fire-circle.jpg",
        alt: "Night gathering frame from the Grounded campaign.",
        orientation: "wide",
      },
    ],
    posterStatus: "Grounded still",
    palette: { a: "#d4ff3f", b: "#f4efe7", c: "#325f4a" },
  },
  {
    slug: "kaesav-okay",
    title: "Okay!",
    client: "Kaesav",
    year: "TBD",
    role: "Director, Cinematographer, Editor, VFX Artist",
    type: "Music Video",
    summary:
      "A surreal performance video filmed inside the abandoned Holy Land USA property. The location already carried a strange, almost apocalyptic feeling, so the visual pushed that world further with AI enhanced fire, animals, and environmental effects.",
    brief:
      "Use an already strange location as the base for a world that feels unstable, cinematic, and bigger than what was captured in camera.",
    build:
      "Raw performance footage is balanced with unnatural imagery, fire, animals, and environmental effects to keep the setting feeling unstable.",
    result:
      "A heightened music video that turns a practical abandoned location into a larger performance world.",
    credits: [
      { label: "Directed, Shot, Edited", value: "Nathan Velasquez" },
      { label: "VFX Artist", value: "Nathan Velasquez" },
    ],
    featured: true,
    priority: 9,
    sourceUrl: `${sourceBase}/kaesavokay/`,
    finalVideoUrl: "https://vimeo.com/1198813761?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198813761"),
    previewGif: "/media/projects/kaesav-okay/preview.gif",
    posterImage: {
      src: "/media/projects/kaesav-okay/wide-crosses-performance.jpg",
      alt: "Wide performance frame at Holy Land USA for Kaesav Okay.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/kaesav-okay/wide-crosses-performance.jpg",
        alt: "Wide performance frame at Holy Land USA for Kaesav Okay.",
        orientation: "wide",
      },
      {
        src: "/media/projects/kaesav-okay/cross-performance.jpg",
        alt: "Low angle performance frame beneath a cross in Kaesav Okay.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/kaesav-okay/holy-land-sign.jpg",
        alt: "Holy Land sign detail from Kaesav Okay.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/kaesav-okay/abandoned-portrait.jpg",
        alt: "Portrait frame inside the abandoned location for Kaesav Okay.",
        orientation: "portrait",
      },
    ],
    posterStatus: "Okay! still",
    palette: { a: "#e64a2e", b: "#f4efe7", c: "#6a8cff" },
  },
  {
    slug: "kaesav-long-day",
    title: "Long Day",
    client: "Kaesav",
    year: "2026",
    role: "Director, Cinematographer, Editor",
    type: "Music Video",
    summary:
      "A performance driven music video filmed during a heavy snowstorm, using the weather as the main visual force.",
    brief:
      "Turn a stripped back winter shoot into something cinematic without leaning on heavy production.",
    build:
      "The edit leans into the storm with aggressive pacing, strong contrast, isolated locations, and intense performance coverage.",
    result:
      "The cold environment, blowing snow, and stripped back locations turn a simple winter shoot into something raw and larger than life.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 12,
    sourceUrl: `${sourceBase}/kaesavlongday/`,
    finalVideoUrl: "https://vimeo.com/1198819047?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198819047"),
    previewGif: "/media/projects/kaesav-long-day/preview.gif",
    posterImage: {
      src: "/media/projects/kaesav-long-day/winter-wide-performance.jpg",
      alt: "Wide snowstorm performance frame from Kaesav Long Day.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/kaesav-long-day/winter-wide-performance.jpg",
        alt: "Wide snowstorm performance frame from Kaesav Long Day.",
        orientation: "wide",
      },
      {
        src: "/media/projects/kaesav-long-day/snow-net-wide.jpg",
        alt: "Snow covered location detail from Kaesav Long Day.",
        orientation: "wide",
      },
      {
        src: "/media/projects/kaesav-long-day/flashlight-snow.jpg",
        alt: "Flashlight and blowing snow frame from Kaesav Long Day.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/kaesav-long-day/storm-performance.jpg",
        alt: "Close snowstorm performance frame from Kaesav Long Day.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/kaesav-long-day/lighter-detail.jpg",
        alt: "Low light lighter detail from Kaesav Long Day.",
        orientation: "wide",
      },
      {
        src: "/media/projects/kaesav-long-day/black-cat-snow.jpg",
        alt: "Snowy stylized visual effect frame from Kaesav Long Day.",
        orientation: "square",
      },
    ],
    posterStatus: "Long Day still",
    palette: { a: "#77b7ff", b: "#f4efe7", c: "#111111" },
  },
  {
    slug: "kaesav-new-day",
    title: "New Day",
    client: "Kaesav",
    year: "2026",
    role: "Directed, Shot, Edited",
    type: "Music Video",
    summary:
      "A performance driven music video built around natural texture, atmosphere, and movement.",
    brief:
      "Create a focused visual with a cinematic outdoor feeling and enough rhythm to carry the track.",
    build:
      "Performance coverage, practical locations, and restrained pacing shape the piece around mood and movement.",
    result:
      "A clean, atmospheric music video that keeps the performance direct while giving the world room to breathe.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 16,
    finalVideoUrl: "https://www.youtube.com/watch?v=lxpJY7yx3Rs",
    previewGif: "/media/projects/kaesav-new-day/preview.gif",
    posterStatus: "New Day preview",
    palette: { a: "#77b7ff", b: "#325f4a", c: "#111111" },
  },
  {
    slug: "who-feels-it-knows-it",
    title: "Who Feels It Knows It",
    client: "Jamaica",
    year: "2025",
    role: "Editor",
    type: "Documentary Short",
    location: "Jamaica",
    summary:
      "Who Feels It Knows It is a short documentary built around intimate portraits, environmental detail, and the rhythm of everyday life in Jamaica. My edit focused on preserving silence, natural sound, and emotional space so the people and locations could carry the story without overexplaining it.",
    brief:
      "Build a short documentary around intimate portraits and everyday environmental detail in Jamaica.",
    build:
      "The edit preserves silence, natural sound, and emotional space so the people and locations can carry the story.",
    result:
      "A patient documentary short that lets rhythm, place, and portraiture communicate without overexplaining.",
    credits: [
      { label: "Editor", value: "Nate Velasquez" },
      { label: "Director", value: "Kristen White" },
      { label: "Colorist", value: "Mike Waddell" },
      { label: "Sound Design", value: "Mike Waddell" },
    ],
    featured: true,
    priority: 8,
    sourceUrl: `${sourceBase}/wfiki/`,
    finalVideoUrl: "https://vimeo.com/1198769255?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198769255"),
    previewGif: "/media/projects/who-feels-it-knows-it/preview.gif",
    posterImage: {
      src: "/media/projects/who-feels-it-knows-it/bar-portrait.jpg",
      alt: "Smiling portrait inside a Jamaican bar from Who Feels It Knows It.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/who-feels-it-knows-it/bar-portrait.jpg",
        alt: "Smiling portrait inside a Jamaican bar from Who Feels It Knows It.",
        orientation: "wide",
      },
      {
        src: "/media/projects/who-feels-it-knows-it/white-hat-portrait.jpg",
        alt: "Outdoor portrait in a white hat from Who Feels It Knows It.",
        orientation: "wide",
      },
      {
        src: "/media/projects/who-feels-it-knows-it/night-portrait.jpg",
        alt: "Night portrait from Who Feels It Knows It.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/who-feels-it-knows-it/film-memory.jpg",
        alt: "Film-textured memory frame from Who Feels It Knows It.",
        orientation: "wide",
      },
      {
        src: "/media/projects/who-feels-it-knows-it/beach-plane.jpg",
        alt: "Beach frame with a plane overhead from Who Feels It Knows It.",
        orientation: "portrait",
      },
    ],
    posterStatus: "Who Feels It Knows It still",
    palette: { a: "#f4efe7", b: "#2f9c67", c: "#e64a2e" },
  },
  {
    slug: "justin-haynes-nybfw",
    title: "New York Bridal Fashion Week",
    client: "Justin Haynes",
    year: "2025",
    role: "Director, Cinematographer, Editor",
    type: "Fashion / Campaign",
    summary:
      "A full day fashion recap documenting Justin Haynes during New York Bridal Fashion Week, moving from preparation and backstage details to the runway and final presentation.",
    brief:
      "Document the day with enough polish for fashion while preserving movement, atmosphere, and craft.",
    build:
      "The edit was built to feel polished, elegant, and fast moving while still giving space to the craftsmanship, styling, and atmosphere surrounding the collection.",
    result:
      "A clean, elegant recap that carries the movement of the day without becoming a generic event video.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 7,
    sourceUrl: `${sourceBase}/nybfw/`,
    finalVideoUrl: "https://vimeo.com/1198804611?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198804611"),
    previewGif: "/media/projects/justin-haynes-nybfw/preview.gif",
    posterImage: {
      src: "/media/projects/justin-haynes-nybfw/red-veil-portrait.jpg",
      alt: "Red bridal fashion portrait from Justin Haynes New York Bridal Fashion Week.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/justin-haynes-nybfw/red-veil-portrait.jpg",
        alt: "Red bridal fashion portrait from Justin Haynes New York Bridal Fashion Week.",
        orientation: "wide",
      },
      {
        src: "/media/projects/justin-haynes-nybfw/designer-direction.jpg",
        alt: "Justin Haynes directing backstage during New York Bridal Fashion Week.",
        orientation: "wide",
      },
      {
        src: "/media/projects/justin-haynes-nybfw/couple-window.jpg",
        alt: "Fashion pair framed by tall windows during New York Bridal Fashion Week.",
        orientation: "wide",
      },
      {
        src: "/media/projects/justin-haynes-nybfw/bridal-party.jpg",
        alt: "Bridal fashion group portrait outside the venue.",
        orientation: "portrait",
      },
      {
        src: "/media/projects/justin-haynes-nybfw/lineup-red-veil.jpg",
        alt: "Lineup of Justin Haynes models during New York Bridal Fashion Week.",
        orientation: "portrait",
      },
    ],
    posterStatus: "NY Bridal Fashion Week still",
    palette: { a: "#f4efe7", b: "#dfc590", c: "#e64a2e" },
  },
  {
    slug: "maajins-trolly-boy",
    title: "Trolly Boy",
    client: "Maajins",
    year: "TBD",
    role: "Director, Cinematographer, Editor",
    type: "Music Video",
    summary:
      "A performance driven music video built around speed, movement, and attitude, with over 70,000 views on YouTube.",
    brief:
      "Keep the visuals direct, immediate, and matched to the speed and attitude of the track.",
    build:
      "Bold framing and fast editorial momentum carry the piece while keeping the performance raw and rhythmic.",
    result:
      "A high energy performance video driven by bold visuals, fast pacing, and clean rhythmic editing.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 18,
    sourceUrl: `${sourceBase}/maajinstrolly/`,
    finalVideoUrl: "https://vimeo.com/1198814112?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198814112"),
    previewGif: "/media/projects/maajins-trolly-boy/preview.gif",
    posterImage: {
      src: "/media/projects/maajins-trolly-boy/hands-title-wide.jpg",
      alt: "Wide performance title frame from Maajins Trolly Boy.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/maajins-trolly-boy/hands-title-wide.jpg",
        alt: "Wide performance title frame from Maajins Trolly Boy.",
        orientation: "wide",
      },
      {
        src: "/media/projects/maajins-trolly-boy/studio-performance.jpg",
        alt: "Studio performance frame from Maajins Trolly Boy.",
        orientation: "wide",
      },
    ],
    posterStatus: "Trolly Boy still",
    palette: { a: "#d4ff3f", b: "#e64a2e", c: "#0b0b0b" },
  },
  {
    slug: "targeted",
    title: "Commercial",
    client: "Targeted",
    year: "2026",
    role: "Director, Cinematographer, Editor",
    type: "Commercial / Spec",
    summary:
      "A commercial piece directed, shot, and edited by Nathan Velasquez.",
    brief:
      "Build a clean visual world around the product, location, and attitude of the brand.",
    build:
      "A focused production approach using practical space, wardrobe, movement, and editorial rhythm.",
    result:
      "A sharp commercial visual built to give the brand a larger, more cinematic presence.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 10,
    finalVideoUrl: "https://vimeo.com/1205297300",
    videoEmbedUrl: vimeoEmbed("1205297300"),
    previewGif: "/media/projects/targeted/preview.gif",
    posterStatus: "Targeted preview",
    palette: { a: "#f4efe7", b: "#e64a2e", c: "#0b0b0b" },
  },
  {
    slug: "xhulooo-get-near",
    title: "Get Near",
    client: "Xhulooo",
    year: "2025",
    role: "Director, Cinematographer, Editor",
    type: "Music Video",
    summary:
      "A performance driven music video directed, shot, and edited by Nathan Velasquez.",
    brief:
      "Create a direct visual with movement, texture, and enough pace to carry the track.",
    build:
      "Practical locations, performance coverage, and editorial rhythm shape the piece around immediacy.",
    result:
      "A focused music video built around clean movement and raw visual energy.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 14,
    finalVideoUrl: "https://www.youtube.com/watch?v=x7LfxXewwYY",
    previewGif: "/media/projects/xhulooo-get-near/preview.gif",
    posterStatus: "Get Near preview",
    palette: { a: "#77b7ff", b: "#f4efe7", c: "#0b0b0b" },
  },
  {
    slug: "osamason-jumpout-show-recap",
    title: "Jumpout Show Recap",
    client: "Osamason",
    year: "2025",
    role: "Director, Cinematographer, Editor, Color",
    type: "Archive",
    summary:
      "A high energy show recap directed, shot, edited, and colored by Nathan Velasquez.",
    brief:
      "Capture the performance energy and atmosphere of the room in a compact recap format.",
    build:
      "Fast coverage, live movement, color, and rhythmic pacing shape the piece around the feeling of the show.",
    result:
      "A direct recap built to feel immediate, loud, and true to the energy of the night.",
    credits: [{ label: "Directed, Shot, Edited, Color", value: "Nathan Velasquez" }],
    featured: true,
    priority: 11,
    finalVideoUrl: "https://www.youtube.com/watch?v=zmgZSFheb8w",
    previewGif: "/media/projects/osamason-jumpout-show-recap/preview.gif",
    posterStatus: "Jumpout Show Recap preview",
    palette: { a: "#e64a2e", b: "#77b7ff", c: "#0b0b0b" },
  },
  {
    slug: "temberik-cream",
    title: "C.R.E.A.M",
    client: "Temberik",
    year: "2025",
    role: "Director, Cinematographer, Editor",
    type: "Music Video",
    summary:
      "A music video directed, shot, and edited by Nathan Velasquez.",
    brief:
      "Build a focused visual around performance, atmosphere, and the tone of the track.",
    build:
      "Direct coverage, practical locations, and rhythmic editing shape the piece around a raw visual identity.",
    result:
      "A compact music video built to feel immediate and memorable.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 17,
    finalVideoUrl: "https://www.youtube.com/watch?v=zjvGL2Mry_w",
    previewGif: "/media/projects/temberik-cream/preview.gif",
    posterStatus: "C.R.E.A.M preview",
    palette: { a: "#e64a2e", b: "#f4efe7", c: "#0b0b0b" },
  },
  {
    slug: "2hollis-show-recap",
    title: "Show Recap",
    client: "2hollis",
    year: "2025",
    role: "Director, Cinematographer, Editor",
    type: "Archive",
    summary:
      "A live show recap directed, shot, and edited by Nathan Velasquez.",
    brief:
      "Capture the movement, crowd energy, and atmosphere of the performance in a compact recap.",
    build:
      "Live coverage, fast pacing, and performance-first editing shape the piece around the feeling of the room.",
    result:
      "A high energy recap built to feel immediate, immersive, and replayable.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 15,
    finalVideoUrl: "https://www.youtube.com/watch?v=m6g9Ov2iH2M",
    previewGif: "/media/projects/2hollis-show-recap/preview.gif",
    posterStatus: "2hollis Show Recap preview",
    palette: { a: "#77b7ff", b: "#f4efe7", c: "#0b0b0b" },
  },
  {
    slug: "ken-carson-show-recap",
    title: "Show Recap",
    client: "Ken Carson",
    year: "2025",
    role: "Director, Cinematographer, Editor",
    type: "Archive",
    summary:
      "A live show recap directed, shot, and edited by Nathan Velasquez.",
    brief:
      "Capture the performance, crowd momentum, and atmosphere of the show in a tight recap format.",
    build:
      "High contrast coverage, fast pacing, and performance-driven cuts shape the piece around live energy.",
    result:
      "A raw show recap built to feel immediate, loud, and connected to the room.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 13,
    finalVideoUrl: "https://www.youtube.com/watch?v=CUTKDyjF3aw",
    previewGif: "/media/projects/ken-carson-show-recap/preview.gif",
    posterStatus: "Ken Carson Show Recap preview",
    palette: { a: "#f4efe7", b: "#77b7ff", c: "#0b0b0b" },
  },
  {
    slug: "kadin-johnny-gat",
    title: "Johnny Gat",
    client: "Kadin",
    year: "2025",
    role: "Director, Cinematographer, Editor",
    type: "Music Video",
    summary:
      "A gritty performance driven visual built around isolation, pressure, and explosive energy. Shot across stark outdoor locations with aggressive handheld movement, distorted perspectives, and AI enhanced fire effects to push the world beyond reality.",
    brief:
      "Build a performance visual around isolation, pressure, and explosive energy.",
    build:
      "Stark outdoor locations, aggressive handheld movement, distorted perspectives, and AI enhanced fire effects push the world beyond reality.",
    result:
      "A direct, explosive music video that turns minimal locations into a harsher, more unstable visual world.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 19,
    sourceUrl: `${sourceBase}/kadinjohnnygat/`,
    finalVideoUrl: "https://vimeo.com/1198794919?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198794919"),
    posterImage: {
      src: "/media/projects/kadin-johnny-gat/distorted-performance.jpg",
      alt: "Distorted handheld performance frame from Kadin's Johnny Gat.",
      orientation: "wide",
    },
    gallery: [
      {
        src: "/media/projects/kadin-johnny-gat/distorted-performance.jpg",
        alt: "Distorted handheld performance frame from Kadin's Johnny Gat.",
        orientation: "wide",
      },
      {
        src: "/media/projects/kadin-johnny-gat/bmg-vfx-silhouette.jpg",
        alt: "Glowing VFX silhouette by the water in Johnny Gat.",
        orientation: "wide",
      },
      {
        src: "/media/projects/kadin-johnny-gat/hk-vfx-world.jpg",
        alt: "AI enhanced blue environment frame from Johnny Gat.",
        orientation: "wide",
      },
    ],
    posterStatus: "Johnny Gat still",
    palette: { a: "#e64a2e", b: "#d4ff3f", c: "#272727" },
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.priority - b.priority);

export const contact = {
  email: "mvnate7@gmail.com",
  instagram: "https://www.instagram.com/oasisnate/",
  linkedin: "https://www.linkedin.com/in/nathan-velasquez-349984245/",
  location: "Massachusetts",
};

export const partners = {
  postHouseName: "World's End",
  postHouseUrl: "https://worldsend.studio/",
};

export const profileMedia = {
  logo: "/media/brand/oasis-logo.png",
  portrait: "/media/profile/nathan-portrait.jpg",
};

export const reel = {
  title: "Director Reel",
  version: "Full Reel",
  provider: "Vimeo",
  visibility: "Public",
  url: "https://vimeo.com/1205152154?share=copy&fl=sv&fe=ci",
  embedUrl: vimeoEmbed("1205152154"),
};

export const heroMedia = {
  desktopSrc: "/media/hero/nathan-hero-desktop.mp4",
  mobileSrc: "/media/hero/nathan-hero-mobile.mp4",
  posterSrc: "/media/hero/nathan-hero-poster.jpg",
  sourceFile: "D:/EDITS/30 sec nate edit.mp4",
  duration: "30 seconds",
};
