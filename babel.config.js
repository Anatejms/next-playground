module.exports = {
  "plugins": [
    "@babel/plugin-transform-react-jsx",
    "babel-plugin-react-require",
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/react",
        "next/babel"
      ]
    },
    "development": {
      "presets": [
        "next/babel"
      ]
    }
  },
};
