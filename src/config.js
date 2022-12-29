module.exports = {
  siteTitle: 'Vasco Rodrigues\' Portfolio',
  siteDescription:
    'Vasco Rodrigues is a Researcher at GECAD, who loves learning new things and captivated by AI challenges',
  siteKeywords:
    'Vasco Rodrigues, Vasco, Rodrigues, vascovrodrigues6, software developer, software engineer, ISEP, GECAD',
  siteUrl: 'https://vascovrodrigues6.github.io/',
  siteLanguage: 'en_US',
  name: 'Vasco Rodrigues',
  location: 'Porto, Portugal',
  email: 'vascovrodrigues6@gmail.com',
  github: 'https://github.com/vascovrodrigues6',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vascovrodrigues6',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vasco-rodrigues-579645130/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#f42c2c',
    navy: '#16181d',
    darkNavy: '#16181d',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
