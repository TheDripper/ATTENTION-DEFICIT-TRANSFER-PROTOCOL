export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "UPPFRI | United Programmers + Publishers For Radical Inclusion",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "title",
        property: "og:title",
        content:
          "UPPFRI | United Programmers + Publishers For Radical Inclusion"
      },
      {
        name: "image",
        property: "og:image",
        content: "//uppfri.org/solidarity_clip_1.gif"
      },
      { name: "url", property: "og:url", content: "https://uppfri.org/" },
      {
        name: "description",
        property: "og:description",
        content:
          "UPPFRI provides sliding-scale / pro bono web dev + design for BIPOC businesses and non-profits working for racial justice."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "http://use.typekit.net/sge4zgs.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios", "@nuxtjs/proxy"],
  proxy: {
    "/api": {
      target: "https://eathereindy.nfshost.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/"
      }
    }
  },

  // serverMiddleware: [
  //   { path: "/server-middleware", handler: "~/server-middleware/rest.js" },
  // ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
