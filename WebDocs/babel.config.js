module.exports = {
  sourceType: "unambiguous",
  presets:["@babel/preset-react",require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    ["@babel/transform-runtime", "typedoc-plugin-markdown", "typedoc-github-wiki-theme"]
]
};
