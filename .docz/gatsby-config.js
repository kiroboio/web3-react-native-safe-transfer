const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Kirobo Web3 Lib',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/sergey/kirobo-web3-lib/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Kirobo Web3 Lib',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/sergey/kirobo-web3-lib',
          templates:
            '/home/sergey/kirobo-web3-lib/node_modules/docz-core/dist/templates',
          docz: '/home/sergey/kirobo-web3-lib/.docz',
          cache: '/home/sergey/kirobo-web3-lib/.docz/.cache',
          app: '/home/sergey/kirobo-web3-lib/.docz/app',
          appPackageJson: '/home/sergey/kirobo-web3-lib/package.json',
          appTsConfig: '/home/sergey/kirobo-web3-lib/tsconfig.json',
          gatsbyConfig: '/home/sergey/kirobo-web3-lib/gatsby-config.js',
          gatsbyBrowser: '/home/sergey/kirobo-web3-lib/gatsby-browser.js',
          gatsbyNode: '/home/sergey/kirobo-web3-lib/gatsby-node.js',
          gatsbySSR: '/home/sergey/kirobo-web3-lib/gatsby-ssr.js',
          importsJs: '/home/sergey/kirobo-web3-lib/.docz/app/imports.js',
          rootJs: '/home/sergey/kirobo-web3-lib/.docz/app/root.jsx',
          indexJs: '/home/sergey/kirobo-web3-lib/.docz/app/index.jsx',
          indexHtml: '/home/sergey/kirobo-web3-lib/.docz/app/index.html',
          db: '/home/sergey/kirobo-web3-lib/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
