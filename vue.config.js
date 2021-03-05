module.exports = {
  assetsDir: "assets",
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: false, // Error: No module factory available for dependency type: CssDependency
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        common: "@/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views",
        pages: "@/pages",
      },
    },
    plugins: [],
  },
};
