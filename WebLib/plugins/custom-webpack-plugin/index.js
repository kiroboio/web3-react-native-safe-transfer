module.exports = function () {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack() {
      return {
        // devtool: 'inline-source-map',
        // module: {
        //   rules: [
        //     // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        //     { test: /\.tsx?$/, loader: "ts-loader" }
        //   ]
        // },
        resolve: {
          fallback: {
            crypto: require.resolve("crypto-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify/browser"),
            dgram: false,
            net: false,
            fs: false,
          },
          alias: {
            web3: "../../web3LocalLib/web3.min.js",
          },
        },
      };
    },
  };
};
