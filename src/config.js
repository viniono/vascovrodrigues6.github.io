module.exports = {
  siteTitle: 'Vinicius Ono |Student ',
    siteDescription:
      'Vinicius Ono is an aspiring data scientist',
    siteKeywords:
      'Vinicius Ono, data, ML, Econometrics',
    siteUrl: 'https://vinono.github.io/',
  siteLanguage: 'en_US',
  name: 'Vinicius Ono',
  location: 'Grinnell, IA',
  email: 'onosanta@grinnell.edu',
  github: 'https://github.com/viniono',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/viniono',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/viniono/',
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
      green: '#64ffda',
      navy: '#0a192f',
      darkNavy: '#020c1b',
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
