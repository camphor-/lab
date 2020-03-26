export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'CAMPHOR- Lab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'CAMPHOR- Lab はプロダクトを作りたい学生やプロジェクトを始めたい学生が集まるグループです。自分の考えるアイディアを提案し、共感する仲間を集めましょう。興味のあるプロジェクトを見つけたら参加して一緒に作業をしましょう。CAMPHOR- のリソースを使って開発することもできます!'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/in_viewport.js',
    '@/plugins/smooth_scroll.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
