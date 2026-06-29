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
  previewVideo?: string;
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
      "A spec commercial built around speed, texture, and practical locations. Two runners move through Springfield with enough scale and pace to make the city feel cinematic.",
    brief:
      "Make a spec spot feel bigger than the resources behind it without losing the city in the frame.",
    build:
      "Fast coverage, low angles, city landmarks, and athletic detail shape the spot around motion and pressure.",
    result:
      "A compact commercial piece with movement, atmosphere, and a clear street-level point of view.",
    credits: [
      { label: "Sound Design", value: "Kenneth Psalms & William Landry" },
      { label: "Color", value: "Michael Waddell" },
      { label: "Production", value: "Nate Velasquez" },
    ],
    featured: true,
    priority: 2,
    sourceUrl: `${sourceBase}/nikespec/`,
    finalVideoUrl: "https://vimeo.com/1198629176?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198629176"),
    previewVideo: "/media/projects/nike-run-for-it/preview.mp4",
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
      "A branded short built around a chance connection, quiet tension, and the rhythm of one night.",
    brief:
      "Shape the story around performance and timing while keeping the brand language natural.",
    build:
      "Dialogue, voiceover, and visual rhythm carry the film without flattening the intimacy.",
    result:
      "A clean branded short with emotional pace, restraint, and enough movement for social delivery.",
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
    priority: 3,
    sourceUrl: `${sourceBase}/ammxnike/`,
    finalVideoUrl: "https://vimeo.com/1198760213?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198760213"),
    previewVideo: "/media/projects/timing-is-everything/preview.mp4",
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
    role: "VFX Artist",
    type: "Music Video",
    summary:
      "A music video expanded through visual effects, animal work, aerial elements, and larger cinematic moments.",
    brief:
      "Make the world feel bigger without breaking the tone of the live action footage.",
    build:
      "Animals, aerial moments, and environment extensions were matched to the lighting, movement, and mood of the footage.",
    result:
      "A bigger visual scale that still feels tied to the performance world.",
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
    priority: 7,
    sourceUrl: `${sourceBase}/liltjaycantchange/`,
    finalVideoUrl: "https://vimeo.com/1198766682?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198766682"),
    previewVideo: "/media/projects/lil-tjay-cant-change/preview.mp4",
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
      "A major artist music video edit built around performance, graphics, and direct momentum.",
    brief:
      "Turn the footage and graphic language into a tight, replayable final edit.",
    build:
      "Performance selection, pacing, and visual punctuation keep the piece moving with the track.",
    result:
      "A sharp edit with clean energy, quick recognition, and major-artist polish.",
    credits: [{ label: "Editor", value: "Nathan Velasquez" }],
    featured: true,
    priority: 6,
    finalVideoUrl: "https://www.youtube.com/watch?v=PDQM23AiARM",
    previewVideo: "/media/projects/lil-baby-fu2x/preview.mp4",
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
      "A Lil Baby x NFL edit connecting artist performance with sports campaign energy.",
    brief:
      "Bring the artist and NFL worlds together without making either side feel secondary.",
    build:
      "Performance, team imagery, and campaign moments are cut for impact and pace.",
    result:
      "A polished music and sports piece with clear brand scale and editorial momentum.",
    credits: [{ label: "Editor", value: "Nathan Velasquez" }],
    featured: true,
    priority: 4,
    finalVideoUrl: "https://www.youtube.com/watch?v=LjYgsSzCGZQ",
    previewVideo: "/media/projects/lil-baby-nfl-touchdown/preview.mp4",
    posterStatus: "Touchdown preview",
    palette: { a: "#77b7ff", b: "#e64a2e", c: "#0b0b0b" },
  },
  {
    slug: "meek-mill-g-herbo-survivors-guilt",
    title: "Survivors Guilt",
    client: "Meek Mill x G Herbo",
    year: "2025",
    role: "Editor",
    type: "Music Video",
    summary:
      "A Meek Mill x G Herbo music video edit built around mood, pressure, and performance.",
    brief:
      "Cut the performance and atmosphere into a direct final piece with weight.",
    build:
      "Performance selection, pacing, and controlled momentum keep the edit focused on the record.",
    result:
      "A tight edit with major-artist presence, tension, and replay value.",
    credits: [{ label: "Editor", value: "Nathan Velasquez" }],
    featured: true,
    priority: 5,
    finalVideoUrl: "https://www.youtube.com/watch?v=hn-vdHMjMGA",
    previewVideo: "/media/projects/meek-mill-g-herbo-survivors-guilt/preview.mp4",
    posterStatus: "Survivors Guilt preview",
    palette: { a: "#f4efe7", b: "#77b7ff", c: "#0b0b0b" },
  },
  {
    slug: "grounded",
    title: "Grounded",
    client: "Botany Scientifics",
    year: "2026",
    role: "Editor",
    type: "Commercial Campaign",
    summary:
      "A commercial campaign for Grounded by Botany Scientifics, built around calm focus, natural energy, and daily pressure.",
    brief:
      "Build multiple hero edits and cutdowns that share one brand language while giving each subject a different rhythm.",
    build:
      "The edits move between routine, pressure, release, product moments, and lifestyle texture.",
    result:
      "A set of social films and cutdowns designed to make the product feel personal, useful, and easy to remember.",
    credits: [
      { label: "Editor", value: "Nate Velasquez" },
      { label: "Sound Design & Mix", value: "Kenneth Psalms & William Landry" },
      { label: "Visual Effects", value: "Kamaal Elmi" },
      { label: "Post-House", value: "World's End" },
    ],
    featured: true,
    priority: 1,
    sourceUrl: "https://www.instagram.com/color____block/",
    finalVideoUrl: "https://vimeo.com/1198797697?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198797697"),
    previewVideo: "/media/projects/grounded/preview.mp4",
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
      "A surreal performance video built inside the abandoned Holy Land USA property, using the location as a strange, apocalyptic base.",
    brief:
      "Push a practical location into a larger world without losing the raw feeling of the shoot.",
    build:
      "Performance footage, fire, animals, and environmental effects keep the setting unstable and cinematic.",
    result:
      "A heightened music video that makes a found location feel dangerous, strange, and fully built.",
    credits: [
      { label: "Directed, Shot, Edited", value: "Nathan Velasquez" },
      { label: "VFX Artist", value: "Nathan Velasquez" },
    ],
    featured: true,
    priority: 11,
    sourceUrl: `${sourceBase}/kaesavokay/`,
    finalVideoUrl: "https://vimeo.com/1198813761?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198813761"),
    previewVideo: "/media/projects/kaesav-okay/preview.mp4",
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
      "A snowstorm performance video where the weather becomes the main production value.",
    brief:
      "Make a stripped-back winter shoot feel cinematic, aggressive, and bigger than the setup.",
    build:
      "Hard contrast, blowing snow, isolated locations, and tight performance coverage drive the edit.",
    result:
      "A raw winter visual with pressure, atmosphere, and enough scale to make the storm feel designed.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 13,
    sourceUrl: `${sourceBase}/kaesavlongday/`,
    finalVideoUrl: "https://vimeo.com/1198819047?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198819047"),
    previewVideo: "/media/projects/kaesav-long-day/preview.mp4",
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
      "A quiet outdoor performance visual built around natural texture, atmosphere, and movement.",
    brief:
      "Keep the world simple, focused, and cinematic without overproducing the track.",
    build:
      "Practical locations, restrained pacing, and performance coverage give the piece space to breathe.",
    result:
      "A clean music video with direct performance energy and a softer visual atmosphere.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 17,
    finalVideoUrl: "https://www.youtube.com/watch?v=lxpJY7yx3Rs",
    previewVideo: "/media/projects/kaesav-new-day/preview.mp4",
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
      "A short documentary shaped around portraits, natural sound, and the emotional rhythm of everyday life in Jamaica.",
    brief:
      "Let the people and locations carry the film without forcing explanation.",
    build:
      "Silence, environmental detail, and patient pacing hold space for the story to land.",
    result:
      "A restrained documentary short where rhythm, place, and portraiture do the talking.",
    credits: [
      { label: "Editor", value: "Nate Velasquez" },
      { label: "Director", value: "Kristen White" },
      { label: "Colorist", value: "Mike Waddell" },
      { label: "Sound Design", value: "Mike Waddell" },
    ],
    featured: true,
    priority: 9,
    sourceUrl: `${sourceBase}/wfiki/`,
    finalVideoUrl: "https://vimeo.com/1198769255?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198769255"),
    previewVideo: "/media/projects/who-feels-it-knows-it/preview.mp4",
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
      "A polished fashion recap following Justin Haynes through New York Bridal Fashion Week, from preparation to runway.",
    brief:
      "Make the day feel elegant and fast without flattening the craft or atmosphere.",
    build:
      "Backstage detail, runway movement, styling, and pacing give the recap a complete fashion-world arc.",
    result:
      "A clean fashion film that feels more intentional than a standard event recap.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 10,
    sourceUrl: `${sourceBase}/nybfw/`,
    finalVideoUrl: "https://vimeo.com/1198804611?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198804611"),
    previewVideo: "/media/projects/justin-haynes-nybfw/preview.mp4",
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
      "A fast performance video built around speed, movement, and attitude, with over 70,000 views on YouTube.",
    brief:
      "Keep the visual direct and rhythmic enough to match the track without overcomplicating it.",
    build:
      "Bold framing, fast cuts, and close performance energy keep the piece raw and immediate.",
    result:
      "A high-energy music video built for replay value and quick recognition.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 19,
    sourceUrl: `${sourceBase}/maajinstrolly/`,
    finalVideoUrl: "https://vimeo.com/1198814112?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198814112"),
    previewVideo: "/media/projects/maajins-trolly-boy/preview.mp4",
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
    title: "Campaign Film",
    client: "Targeted",
    year: "2026",
    role: "Director, Cinematographer, Editor",
    type: "Commercial Campaign",
    summary:
      "A commercial film for Targeted built around product, attitude, and a controlled visual world.",
    brief:
      "Give the brand a sharper presence through practical production and focused image-making.",
    build:
      "Practical space, wardrobe, movement, and editorial rhythm shape the campaign into a clear visual identity.",
    result:
      "A compact commercial piece that makes the brand feel intentional, current, and cinematic.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 8,
    finalVideoUrl: "https://vimeo.com/1205297300",
    videoEmbedUrl: vimeoEmbed("1205297300"),
    previewVideo: "/media/projects/targeted/preview.mp4",
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
      "A direct performance music video built around movement, water, and city texture.",
    brief:
      "Create a visual with enough motion and atmosphere to carry the track without losing immediacy.",
    build:
      "Location texture, performance coverage, and rhythmic cutting keep the piece alive.",
    result:
      "A focused music video with clean movement, raw energy, and a strong sense of place.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 15,
    finalVideoUrl: "https://www.youtube.com/watch?v=x7LfxXewwYY",
    previewVideo: "/media/projects/xhulooo-get-near/preview.mp4",
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
      "A high-energy Osamason show recap built to feel like the room, not a recap afterthought.",
    brief:
      "Capture the performance energy, crowd pressure, and atmosphere in a compact format.",
    build:
      "Live movement, fast coverage, color, and hard pacing shape the piece around the feeling of the night.",
    result:
      "A loud, immediate recap with the kind of pace that makes the show feel active again.",
    credits: [{ label: "Directed, Shot, Edited, Color", value: "Nathan Velasquez" }],
    featured: true,
    priority: 12,
    finalVideoUrl: "https://www.youtube.com/watch?v=zmgZSFheb8w",
    previewVideo: "/media/projects/osamason-jumpout-show-recap/preview.mp4",
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
      "A night-driven music video built around stark titles, negative space, and raw atmosphere.",
    brief:
      "Give the track a simple but memorable world without overloading the visual.",
    build:
      "Practical locations, direct coverage, title work, and rhythmic editing shape the piece around tension.",
    result:
      "A compact music video with a clear graphic identity and dark, restrained energy.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 18,
    finalVideoUrl: "https://www.youtube.com/watch?v=zjvGL2Mry_w",
    previewVideo: "/media/projects/temberik-cream/preview.mp4",
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
      "A 2hollis show recap built around crowd movement, stage pressure, and live chaos.",
    brief:
      "Make the recap feel as physical and immediate as the performance.",
    build:
      "Crowd coverage, fast pacing, and performance-first editing shape the piece around the room's energy.",
    result:
      "A live recap with momentum, scale, and enough texture to feel replayable.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 16,
    finalVideoUrl: "https://www.youtube.com/watch?v=m6g9Ov2iH2M",
    previewVideo: "/media/projects/2hollis-show-recap/preview.mp4",
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
      "A Ken Carson show recap built around high contrast performance, crowd energy, and speed.",
    brief:
      "Turn the performance and audience energy into a tight, punchy recap.",
    build:
      "High-contrast footage, quick pacing, and performance-driven cuts keep the recap moving.",
    result:
      "A raw live piece that feels loud, direct, and connected to the room.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 14,
    finalVideoUrl: "https://www.youtube.com/watch?v=CUTKDyjF3aw",
    previewVideo: "/media/projects/ken-carson-show-recap/preview.mp4",
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
      "A gritty performance video built around isolation, pressure, distorted perspectives, and explosive energy.",
    brief:
      "Make stark outdoor locations feel unstable, aggressive, and larger than reality.",
    build:
      "Aggressive handheld movement, stark locations, distorted frames, and fire effects push the world past realism.",
    result:
      "A direct, explosive music video that turns minimal locations into a harsher, more unstable visual world.",
    credits: [{ label: "Directed, Shot, Edited", value: "Nathan Velasquez" }],
    featured: true,
    priority: 20,
    sourceUrl: `${sourceBase}/kadinjohnnygat/`,
    finalVideoUrl: "https://vimeo.com/1198794919?fl=pl&fe=ti",
    videoEmbedUrl: vimeoEmbed("1198794919"),
    previewVideo: "/media/projects/kadin-johnny-gat/preview.mp4",
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
        alt: "Blue environment effects frame from Johnny Gat.",
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
