// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (This is the only required config)
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
      header: 'Проекты faidychka',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Мои проекты',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'LEG1T',
          description:
            'Уникальные игры и хорошое коммьюнити.',
          imageUrl:
            'https://telegraphoto.site/images/fwasamw8asjl110f0ocnijibk.jpg',
          link: 'https://t.me/LEG1TProject',
        }
      ],
    },
  },
  seo: {
    title: 'Программист Телеграм ботов',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'faidychka',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'faidychka', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'faidychka',
    website: 'https://www.faidychka.ru',
    phone: '',
    email: 'rufaidychka@gmail.com',
  },
  resume: {},
  skills: [
    'Python',
    'SQLite',
    'AIOGRAM',
    'MySQL'
  ],
  experiences: [
  ],
  certifications: [
  ],
  educations: [
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark'
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
      class="text-primary" href="https://t.me/faidychka"
      target="_blank"
      rel="noreferrer"
    >FAIDYCHKA</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
