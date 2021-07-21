const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Web3-react-safe-transfer docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://github.com/kiroboio/web3-lib',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Safe-transfer docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/kiroboio/web3-lib',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kiroboio/web3-lib',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    [
      'docusaurus-plugin-includes',
      {
        sharedFolders: [
          { source: '../dev', target: './docs/shared'},
        ],
        postBuildDeletedFolders: ['shared'],
      }
    ],
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   collapsed: false,
    //   items: [
    //     'creating-pages',
    //     {
    //       type: 'category',
    //       label: 'Docs',
    //       items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],
    //     },
    //   ],
    // },
    [
      'docusaurus-plugin-typedoc',
      {
        id:'context',
        entryPoints: ['../dev/context/index.ts'],
        out: "api/context",
        disableSources: true,
        sidebar: {
          categoryLabel: 'Context',
          position: 1,
          fullNames: true
        },
        includes: ['../dev/stores']
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'debugging',
        entryPoints: ['../dev/debugging/index.ts'],
        out: 'debugging',
        disableSources: true,
        sidebar: {
          categoryLabel: 'Debugging',
          position: 3,
          fullNames: true
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'hooks',
        entryPoints: ['../dev/hooks/index.ts'],
        out: "api/hooks",
        disableSources: true,
        sidebar: {
          categoryLabel: 'Hooks',
          position: 2,
          fullNames: true
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'stores',
        entryPoints: ['../dev/stores/index.ts'],
        out: 'api/stores',
        disableSources: true,
        tsconfig: '../tsconfig.json',
        sidebar: {
          categoryLabel: 'Stores',
          position: 5,
          fullNames: true
        },
        includes: ['../dev/hooks']
      },
      
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'utils',
        entryPoints: ['../dev/utils/index.ts'],
        out: 'api/utils',
        disableSources: true,
        sidebar: {
          categoryLabel: 'Utils',
          position: 6,
          fullNames: true
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'dto',
        entryPoints: ['../dev/dto/index.ts'],
        out: 'api/dto',
        disableSources: true,
        sidebar: {
          categoryLabel: 'DTO',
          position: 7,
          fullNames: true
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'customConnectors',
        entryPoints: ['../dev/customConnectors/index.ts'],
        out: 'api/customConnectors',
        disableSources: true,
        sidebar: {
          categoryLabel: 'Custom Connectors',
          position: 8,
          fullNames: true
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};