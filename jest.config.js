// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require("jest-config");
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};
