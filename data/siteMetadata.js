const siteMetadata = {
  title: 'Andrew Weisbeck Developer Journal',
  author: 'Andrew Weisbeck',
  headerTitle: 'GeauxWeisbeck4',
  description: 'A developer journal and blog by Andrew Weisbeck.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://andrewweisbeck-journal.vercel.app',
  siteRepo: 'https://github.com/GeauxWeisbeck4/andrewweisbeck-journal',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'andrew.weisbeck@tarheeldevstudio.com',
  github: 'https://github.com/GeauxWeisbeck4',
  twitter: 'https://twitter.com/GeauxWeisbeck4',
  facebook: 'https://facebook.com/GeauxWeisbeck4',
  youtube: 'https://www.youtube.com/channel/UC8S2Rk7U83DnGaT3EibIREwhttps://youtube.com',
  linkedin: 'https://www.linkedin.com/in/GeauxWeisbeck4',
  locale: 'en-US',
  analytics: {
    posthogAnalyticsId: 'phc_WaDhI9h7o7OqlD1riIgt0WLYAyvGoJn2N5Qp5uqoCXS', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
