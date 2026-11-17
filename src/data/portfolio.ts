/**
 * Central portfolio data — generated from Jaswin Pinnu's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Jaswin Pinnu',
  displayName: 'Jaswin Pinnu',
  firstName: 'JASWIN',
  seriesTag: 'THE J SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PINNU ORIGINAL',
  role: 'Full Stack Developer',
  tagline: ['Full-Stack Developer', 'AI / ML', 'JavaScript · Java'],
  intro:
    'A B.Tech Computer Science & Engineering (AI & ML) student and full-stack developer building responsive web applications with HTML, CSS, JavaScript and Firebase, plus working knowledge of Java. Built an e-commerce platform with authentication, cart and payments, and a deep-learning capstone applying Vision Transformers to satellite imagery.',
  location: 'Bengaluru, Karnataka',
  email: 'jaswinpinnu@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/jaswin-pinnu-5b99572a3',
    github: 'https://github.com/jaswinpinnu',
  },
  resumePdf: '/assets/Jaswin_Pinnu_Resume.pdf',
  portrait: {
  src: `${import.meta.env.BASE_URL}assets/portrait-720.webp`,
  srcSet: `${import.meta.env.BASE_URL}assets/portrait-420.webp 420w, ${import.meta.env.BASE_URL}assets/portrait-720.webp 720w, ${import.meta.env.BASE_URL}assets/portrait-1100.webp 1100w`,
  alt: 'Portrait of Jaswin Pinnu',
},
  interests: ['Deep Learning', 'Computer Vision', 'Full Stack Development'],
};

export const education = [
  {
    school: 'GITAM',
    place: 'Bengaluru',
    degree: 'Bachelor of Technology — Computer Science & Engineering (AI & ML)',
    period: '2022 – 2026',
    score: 'B.Tech · 2026',
  },
  {
    school: 'Narayana Junior College',
    place: 'Andhra Pradesh',
    degree: 'Intermediate',
    period: '2020 – 2022',
    score: '2022',
  },
  {
    school: 'Montessori Indus',
    place: 'Andhra Pradesh',
    degree: 'SSC',
    period: '2020',
    score: '2020',
  },
];

export const experience = [
  {
    company: 'Teachnook',
    role: 'Full Stack Developer Intern',
    place: 'Bengaluru',
    period: '2025',
    points: [
      'Developed responsive front-end interfaces using HTML, CSS, and JavaScript, improving usability across desktop and mobile devices.',
      'Completed Full Stack Developer and Java Developer internship certifications.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  liveUrl?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'vit-land-cover',
    title: 'ViT Land Cover',
    year: '2026',
    genre: 'AI • Computer Vision • Deep Learning',
    logline: 'A Vision Transformer model that classifies land use and land cover categories from satellite imagery.',
    stack: ['Python', 'Vision Transformers', 'Deep Learning', 'Computer Vision'],
    build: [
      'Built a deep learning model using Vision Transformers (ViT) to classify land use and land cover categories from satellite imagery.',
      'Applied modern transformer-based computer vision techniques to remote-sensing data as a B.Tech AI & ML capstone project.',
    ],
    features: [
      'Vision Transformer (ViT) architecture',
      'Land use and land cover classification',
      'Satellite imagery pipeline',
      'Image classification end-to-end',
    ],
    metrics: [
      { value: 'ViT', label: 'architecture' },
      { value: 'Satellite', label: 'imagery input' },
      { value: 'Capstone', label: 'B.Tech AI & ML' },
      { value: '2026', label: 'project year' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'rk-fashions',
    title: 'RK Fashions',
    year: '2026',
    genre: 'Full-Stack • E-Commerce • Firebase',
    logline: 'A responsive e-commerce platform with Firebase auth, cart, addresses, UPI payments and order history.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    liveUrl: 'https://jaswinpinnu.github.io/rk-fashions/',
    build: [
      'Designed and developed a responsive e-commerce application with HTML, CSS, JavaScript, and Firebase, supporting both desktop and mobile users.',
      'Implemented secure user authentication with Firebase Authentication, including registration, login, password reset, and Google Sign-In.',
      'Built core shopping features: product categories and listings, cart management, saved addresses, UPI payment workflow, and order history.',
      'Managed client-side product and cart state with JavaScript and localStorage for a fast, seamless shopping experience.',
    ],
    features: [
      'Firebase Authentication (email + Google Sign-In)',
      'Product categories & listings',
      'Cart management & localStorage state',
      'Saved addresses',
      'UPI payment workflow',
      'Order history',
      'Responsive desktop & mobile UI',
    ],
    metrics: [
      { value: 'Firebase', label: 'auth & backend' },
      { value: 'UPI', label: 'payment workflow' },
      { value: 'Google', label: 'Sign-In supported' },
      { value: 'Mobile', label: '+ desktop ready' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'fsd-cert',
    title: 'Full Stack Intern',
    org: 'Teachnook',
    detail: 'Completed Full Stack Developer Intern Certification after building responsive web interfaces in production-style projects.',
    laurel: 'Internship 2025',
  },
  {
    id: 'java-cert',
    title: 'Java Developer',
    org: 'INFOSYS SPRINGBOARD',
    detail: 'Completed Java Developer Intern Certification alongside full-stack training.',
    laurel: 'Certification',
  },
  {
    id: 'capstone',
    title: 'ViT Capstone',
    org: 'GITAM · AI & ML',
    detail: 'Capstone project applying Vision Transformers to land use and land cover classification from satellite imagery.',
    laurel: 'Deep Learning',
  },
  {
    id: 'ecommerce',
    title: 'RK Fashions',
    org: 'Personal Project',
    detail: 'Full-stack e-commerce app with Firebase auth, cart, UPI payments and order history — desktop and mobile.',
    laurel: 'Full Stack',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Teachnook', name: 'Full Stack Developer Intern Certification', link: '#' },
  { issuer: 'INFOSYS SPRINGBOARD', name: 'Java Developer Intern Certification', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming & markup',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'Responsive Web Design', mono: 'Rd' },
      { name: 'Client-Side State', mono: 'St' },
      { name: 'localStorage', mono: 'Ls' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Auth',
    subtitle: 'Firebase & authentication',
    skills: [
      { name: 'Firebase Auth', mono: 'Fb', note: 'Primary' },
      { name: 'Google Sign-In', mono: 'Gs' },
      { name: 'Web Authentication', mono: 'Wa' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    subtitle: 'Deep learning & vision',
    skills: [
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'Vision Transformers', mono: 'Vt', note: 'Capstone' },
      { name: 'Image Classification', mono: 'Ic' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Everyday productivity',
    skills: [
      { name: 'Microsoft Excel', mono: 'Ex' },
      { name: 'Word', mono: 'Wd' },
      { name: 'PowerPoint', mono: 'Pp' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    subtitle: 'How the work gets done',
    skills: [
      { name: 'Team Collaboration', mono: 'Tc' },
      { name: 'Time Management', mono: 'Tm' },
      { name: 'Negotiation', mono: 'Ng' },
      { name: 'Active Listening', mono: 'Al' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['RK Fashions e-commerce', 'Teachnook internship'],
  HTML5: ['RK Fashions', 'Teachnook front-end'],
  CSS3: ['RK Fashions', 'Responsive interfaces'],
  Java: ['Java Developer Intern Certification', 'INFOSYS SPRINGBOARD'],
  'Responsive Web Design': ['RK Fashions desktop + mobile', 'Teachnook'],
  'Client-Side State': ['RK Fashions cart & product state'],
  localStorage: ['RK Fashions cart persistence'],
  'Firebase Auth': ['RK Fashions registration, login, password reset'],
  'Google Sign-In': ['RK Fashions Firebase Authentication'],
  'Web Authentication': ['Firebase Auth + Google Sign-In'],
  'Deep Learning': ['ViT Land Cover capstone'],
  'Computer Vision': ['Satellite imagery classification'],
  'Vision Transformers': ['Land use & land cover capstone'],
  'Image Classification': ['ViT Land Cover project'],
  'Git / GitHub': ['github.com/jaswinpinnu'],
  'Team Collaboration': ['Teachnook internship'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020 – 2022',
    synopsis: 'School and intermediate years — building the academic base that led into AI & ML.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'SSC',
        description: 'Completed SSC at Montessori Indus in 2020.',
        tags: ['SSC', 'Montessori Indus'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Intermediate',
        description: 'Intermediate at Narayana Junior College — finished in 2022.',
        tags: ['Intermediate', 'Narayana'],
        runtime: '2020 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Computer Science & Engineering (AI & ML) at GITAM, Bengaluru.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning at GITAM.',
        tags: ['B.Tech', 'CSE', 'AI & ML', 'GITAM'],
        runtime: '2022 – 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Capstone',
        description: 'Vision Transformer-based land use and land cover classification from satellite imagery — deep learning meets remote sensing.',
        tags: ['ViT', 'Computer Vision', 'Deep Learning'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025',
    synopsis: 'Full Stack Developer Internship at Teachnook, Bengaluru — shipping responsive interfaces and earning dual certifications.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'Developed responsive front-end interfaces with HTML, CSS and JavaScript, improving usability across desktop and mobile.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        runtime: '2025 · Teachnook',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Certified',
        description: 'Completed Java Developer internship certifications.',
        tags: [ 'Java', 'Certification'],
        runtime: 'INFOSYS SPRINGBOARD 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Two Originals — a Vision Transformer capstone and a full-stack Firebase e-commerce platform.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'ViT Land Cover — Vision Transformers classifying land use and land cover from satellite imagery.',
        tags: ['Python', 'ViT', 'Satellite'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Full-Stacker',
        description: 'RK Fashions — responsive e-commerce with Firebase auth, cart, UPI payments and order history.',
        tags: ['Firebase', 'JavaScript', 'E-Commerce'],
        runtime: '2026',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Deep learning, computer vision and full-stack product work — the next arc of the series.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring deeper computer vision, production full-stack systems, and collaborative product development.',
        tags: ['Computer Vision', 'Full Stack', 'Product'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary stack', title: 'JavaScript', detail: 'HTML · CSS · Firebase · localStorage', palette: amber },
  { label: 'The AI Original', title: 'ViT Land Cover', detail: 'Vision Transformers · Satellite imagery', palette: ocean },
  { label: 'The full-stack Original', title: 'RK Fashions', detail: 'E-commerce · Auth · Cart · UPI', palette: amber },
  { label: 'Internship', title: 'Teachnook', detail: 'Full Stack Developer Intern · 2025', palette: jade },
  { label: 'Auth specialty', title: 'Firebase Auth', detail: 'Email + Google Sign-In', palette: crimson },
  { label: 'Deep learning', title: 'Vision Transformers', detail: 'Land use & land cover classification', palette: ocean },
  { label: 'Degree', title: 'B.Tech AI & ML', detail: 'GITAM · CSE · 2026', palette: violet },
  { label: 'Certifications', title: '2 Intern Certs', detail: 'Full Stack + Java · Teachnook', palette: jade },
  { label: 'Backend knowledge', title: 'Java', detail: 'Java Developer Intern Certification', palette: amber },
  { label: 'Current focus', title: 'Full Stack + CV', detail: 'Web products & computer vision', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['GITAM · Computer Science & Engineering', 'Specialization in Artificial Intelligence & Machine Learning'],
    chips: ['2026'],
  },
  {
    kicker: 'Skills',
    title: 'JavaScript first.',
    lines: ['HTML5, CSS3, Java · Firebase Auth & Google Sign-In', 'Deep Learning · Computer Vision · Vision Transformers'],
    chips: ['JavaScript', 'Firebase', 'Java', 'ViT'],
  },
  {
    kicker: 'Internship',
    title: 'The Training Arc',
    lines: ['Full Stack Developer Intern · Teachnook · Bengaluru · 2025', 'Responsive front-ends · Full Stack & Java certifications'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['ViT Land Cover — Vision Transformers on satellite imagery', 'RK Fashions — Firebase e-commerce with cart, auth & UPI'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Full Stack Developer Intern Certification — Teachnook', 'Java Developer Intern Certification', 'Vision Transformer capstone — GITAM'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Full-stack product work · Computer Vision · Deep Learning'],
  },
];

export type ProfileId = 'jaswin' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'jaswin',
    name: 'Jaswin',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
