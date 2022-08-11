const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "jsx"],
  modulePathIgnorePatterns: ["e2e"],
};
