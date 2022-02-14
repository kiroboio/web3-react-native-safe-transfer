const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const guidesPlugins =  [["docusaurus-plugin-typedoc",
  {
    id: "guides",
    out: "Guides",
    tsconfig: "../tsconfig.json",
    sidebar: {
      categoryLabel: "Guides",
      position: 2,
      fullNames: true,
    },
  },
],
[
  "docusaurus-plugin-typedoc",
  {
    id: "connect",
    out: "Guides/connect",
    disableSources: true,
    readme: "../dev/context/CONNECT.md",
    tsconfig: "../tsconfig.json",
    sidebar: {
      categoryLabel: "Connect",
      position: 1,
      fullNames: true,
    },
  },
],
[
  "docusaurus-plugin-typedoc",
  {
    id: "deposit",
    out: "Guides/deposit",
    disableSources: true,
    readme: "../dev/context/DEPOSIT.md",
    tsconfig: "../tsconfig.json",
    sidebar: {
      categoryLabel: "Deposit",
      position: 2,
      fullNames: true,
    },
  },
],
[
  "docusaurus-plugin-typedoc",
  {
    id: "transfers",
    out: "Guides/transfers",
    disableSources: true,
    readme: "../dev/context/LISTS.md",
    tsconfig: "../tsconfig.json",
    sidebar: {
      categoryLabel: "Transfers",
      position: 3,
      fullNames: true,
    },
  },
],
[
  "docusaurus-plugin-typedoc",
  {
    id: "actions",
    out: "Guides/actions",
    disableSources: true,
    readme: "../dev/context/ACTIONS.md",
    tsconfig: "../tsconfig.json",
    sidebar: {
      categoryLabel: "Actions",
      position: 4,
      fullNames: true,
    },
  },
],
[
  "docusaurus-plugin-typedoc",
  {
    id: "utils_guide",
    out: "Guides/utils",
    disableSources: true,
    readme: "../dev/context/UTILS.md",
    tsconfig: "../tsconfig.json",
    sidebar: {
      categoryLabel: "Utils",
      position: 5,
      fullNames: true,
    },
  },
]]

const mainPlugins = [
  [
    "docusaurus-plugin-includes",
    {
      id: "include_dev",
      sharedFolders: [{ source: "../dev", target: "./docs/shared" }],
      postBuildDeletedFolders: ["shared"],
    },
  ],
  [
    "docusaurus-plugin-typedoc",
    {
      id: "context",
      entryPoints: ["../dev/context/index.ts"],
      out: "Api/context",
      disableSources: true,
      tsconfig: "../tsconfig.json",
      sidebar: {
        categoryLabel: "Context",
        position: 1,
        fullNames: true,
      },
      includes: ["../dev/stores"],
    },
  ],
  [
    "docusaurus-plugin-typedoc",
    {
      id: "hooks",
      entryPoints: ["../dev/hooks/index.ts"],
      out: "Api/hooks",
      disableSources: true,
      tsconfig: "../tsconfig.json",
      sidebar: {
        categoryLabel: "Hooks",
        position: 2,
        fullNames: true,
      },
    },
  ],
  [
    "docusaurus-plugin-typedoc",
    {
      id: "stores",
      entryPoints: ["../dev/stores/index.ts"],
      out: "Api/stores",
      disableSources: true,
      tsconfig: "../tsconfig.json",
      sidebar: {
        categoryLabel: "Stores",
        position: 4,
        fullNames: true,
      },
      includes: ["../dev/hooks"],
    },
  ],
  [
    "docusaurus-plugin-typedoc",
    {
      id: "utils",
      entryPoints: ["../dev/utils/index.ts"],
      out: "Api/utils",
      disableSources: true,
      tsconfig: "../tsconfig.json",
      sidebar: {
        categoryLabel: "Utils",
        position: 5,
        fullNames: true,
      },
    },
  ],
  [
    "docusaurus-plugin-typedoc",
    {
      id: "dto",
      entryPoints: ["../dev/dto/index.ts"],
      out: "Api/dto",
      disableSources: true,
      tsconfig: "../tsconfig.json",
      sidebar: {
        categoryLabel: "DTO",
        position: 6,
        fullNames: true,
      },
    },
  ],
  [
    "docusaurus-plugin-typedoc",
    {
      id: "customConnectors",
      entryPoints: ["../dev/customConnectors/index.ts"],
      out: "Api/customConnectors",
      tsconfig: "../tsconfig.json",
      disableSources: true,
      sidebar: {
        categoryLabel: "Custom Connectors",
        position: 7,
        fullNames: true,
      },
    },
  ],
]
const getPlugins = () => {
  const allPlugins = mainPlugins.concat(guidesPlugins)
  if(process.env.BUILD) {
    return mainPlugins
  }

  return allPlugins
}
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Web3-react-native-safe-transfer docs",
  tagline: "Dinosaurs are cool",
  url: "https://kiroboio.github.io",
  baseUrl: "/web3-react-native-safe-transfer/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "kiroboio", // Usually your GitHub org/user name.
  projectName: "web3-react-native-safe-transfer", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Safe-transfer docs react-native",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/kiroboio/web3-lib",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {},
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/kiroboio/web3-lib",
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
  plugins: getPlugins(),
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
