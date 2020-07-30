module.exports = {
  "roots": [
    "<rootDir>/components"
  ],
  "transform": {
    "^.+\\.tsx?$": "babel-jest"
  },
  "testRegex": ".*(test|spec)\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/tests/setupAfterEnv.ts"],
};
