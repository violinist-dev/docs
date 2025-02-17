import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  clientModules: ['./src/hashMigrate.js'],
  title: 'Violinist documentation',
  tagline: "",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.violinist.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'violinist-dev',
  projectName: 'docs',

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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/violinist-dev/docs/blob/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    image: 'img/violinist-logo.png',
    navbar: {
      title: 'Violinist',
      logo: {
        alt: 'Violinist Logo',
        src: 'img/violinist-logo.png',
      },
      items: [
        {
          href: 'https://github.com/violinist-dev/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Support',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
            {
              label: 'API Documentation',
              href: 'https://violinist.io/api-docs',
            },
            {
              label: 'About Violinist.io',
              href: 'https://violinist.io/about',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Contact us',
              href: 'https://violinist.io/contact',
            },
            {
              label: 'Pricing',
              href: 'https://violinist.io/pricing',
            },
            {
              label: 'Terms of use',
              href: 'https://violinist.io/terms',
            },
            {
              label: 'Privacy',
              href: 'https://violinist.io/privacy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/violinist-dev',
            },
            {
              label: '@violinist_io on X (Twitter)',
              href: 'https://twitter.com/violinist_io',
            },
            {
              label: '@violinistdevio on Medium',
              href: 'https://medium.com/@violinistdevio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Violinist.io`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
