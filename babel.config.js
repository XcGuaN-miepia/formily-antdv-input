module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "@formily/antdv",
        "libraryDirectory": "esm",
        "style": true
      },
      "@formily/antdv"
    ]
  ]
}
