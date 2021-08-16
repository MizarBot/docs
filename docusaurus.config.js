const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mizar Docs',
  tagline: "I'm a free, multipurpose Discord bot that provides everything needed to run your server, with over 100 customisable commands.",
  url: 'https://docs.mizarbot.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/logo.png',
  organizationName: 'Mizar',
  projectName: 'Mizar',
  themeConfig: {
    navbar: {
      title: 'Mizar',
      logo: {
        alt: 'Mizar Logo',
        src: 'images/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://mizarbot.xyz',
          label: 'Main Website',
          position: 'left'
        },
        {
          href: 'https://roadmap.mizarbot.xyz',
          label: 'Roadmap',
          position: 'left'
        },
        {
          href: 'https://mizarbot.xyz/discord',
          label: 'Discord',
          position: 'left'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Mizar`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark'
    },
    gtag: {
      trackingID: 'G-23CK06NMJD'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
