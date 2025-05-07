// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'khabon', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['khabon/genomeanalysis', 'khabon/microbiome-tutorial'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Genetic Biotechnology:Parkinsons Disease',
          description:
            'CRISPR study on Parkinsons Disease',
          imageUrl:
            'https://github.com/khabon/khabon.github.io/raw/main/Screen%20Shot%202025-04-30%20at%209.05.48%20AM.png',
          link: 'https://github.com/khabon/khabon.github.io/raw/main/Kimberly%20Habons%20Genetic%20Biotechnology%20Presentation.pdf',
        },
        {
          title: 'How Weather and Climate Affect Snail Activity',
          description:
            'Study on how environmental factors such as weather affect snail acitivity',
          imageUrl:
            'https://github.com/khabon/khabon.github.io/raw/main/Screen%20Shot%202025-04-30%20at%209.07.53%20AM.png',
          link: 'https://github.com/khabon/khabon.github.io/raw/main/Snailstudy',
        },
      ],
    },
  },
  seo: {
    title: 'kimberly habon website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'kimberlyhabon@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://github.com/khabon/khabon.github.io/raw/main/KimCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'laboratory techniques',
    'histology techniques',
    'Bioinformatics',
  
  ],
  experiences: [
    {
      company: 'Los Banos Unified School District ',
      position: 'Substitute Teacher',
      from: 'August 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Walmart',
      position: 'Stocking Associate',
      from: 'April 2021',
      to: 'July 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'Bachelor of Arts in Biological Sciences',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'Merced College',
      degree: 'Associate in Arts in Social and Behavorial Sciences',
      from: '2019',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'Draft genome sequence Chryseobacterium treverense isolated from human clincal sources',
      conferenceName: '',
      journalName: 'Microbiology Resource Anouncement',
      authors: 'Analisa Coppens, Isabella Fregoso, Rachel Haakma, Kimberly Habon, Grace Rodrigues, Tricia Van Laar',
      link: 'https://github.com/khabon/khabon.github.io/raw/main/Chryseobacteriumtreverensefinaldraft%20-2-1.pdf',
      description:
        'We report the draft genome sequence of Chryseobacterium treverense is isolated from human clinical sources.  The genome is 2,379,279 base pairs and contains genes enhancing bacterium survival and evasion of the host’s immune system, therefore amplifying broad antibiotic resistance.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
