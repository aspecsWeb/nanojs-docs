import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NanoJS',
  tagline: 'Documentation for NanoJS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.docs.nanojs.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aspecsWeb', // Usually your GitHub org/user name.
  projectName: 'nanojs-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aspecsWeb/nanojs-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NanoJS Docs',
      logo: {
        alt: 'Aspecs Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'https://github.com/aspecsWeb/nanojs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'NanoJS',
          items: [
            {
              label: 'Website',
              to: 'https://www.nanojs.dev',
            },
            {
              label: 'Docs',
              to: 'https://www.docs.nanojs.dev',
            },
            {
              label: 'CLI',
              to: 'https://github.com/aspecsWeb/nanojs-cli',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'Framework',
              to: 'https://github.com/aspecsWeb/nanojs',
            },
            {
              label: 'Documentation',
              to: 'https://github.com/aspecsWeb/nanojs-docs',
            },
            {
              label: 'NanoJS CLI',
              to: 'https://github.com/aspecsWeb/nanojs-cli',
            },
            {
              label: 'Website',
              to: 'https://github.com/aspecsWeb/nanojs-website',
            },
          ],
        },
        {
          title: 'Aspecs',
          items: [
            {
              label: 'Sponsor',
              to: 'https://github.com/sponsors/aspecsWeb',
            },
            {
              label: 'Website',
              to: 'https://www.aspecs.ch/en',
            },
            {
              label: 'Socials',
              to: 'https://www.aspecs.ch/en/socials',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NanoJS, Aspecs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
