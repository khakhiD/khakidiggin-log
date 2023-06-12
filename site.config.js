const CONFIG = {
  // profile setting (required)
  profile: {
    name: "khakiD",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Digger",
    bio: "아~ 완벽히 이해했어! (이해못했음)",
    email: "kakkiid@kakao.com",
    linkedin: "dongho-shin-1b5147244",
    github: "khakhid",
    instagram: "",
  },
  projects: [
    {
      name: `khakidiggin-log`,
      href: "https://github.com/khakhid/khakidiggin-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Khaki-Diggin-Log💦",
    description: "카키디의 프론트엔드 개발 삽질 기록장",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://khakidiggin-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://raw.githubusercontent.com/khakhiD/khakidiggin-log/main/public/images/ogp-image.png", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "khakhid/khakidiggin-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
