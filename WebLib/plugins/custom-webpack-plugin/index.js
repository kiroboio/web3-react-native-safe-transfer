module.exports = function () {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            web3: "../../web3LocalLib/web3.min.js",
          },
        },
      };
    },
  };
};
