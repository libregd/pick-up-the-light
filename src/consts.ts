export const SITE = {
  title: 'Pick up the light',
  description: 'A curated collection of creative sparks, visual insights, and philosophical reflections.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Chinese: 'cn',
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/libregd/pick-up-the-light/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

// export type Sidebar = Record<
//   (typeof KNOWN_LANGUAGE_CODES)[number],
//   Record<string, { text: string; link: string }[]>
// >
export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, Record<string, { text: string; link: string }[]>>
>;

// export const SIDEBAR: Sidebar = {
//   en: {
//     'creation': [
//       { text: 'Introduction', link: 'en/introduction' },
//       { text: 'Page 2', link: 'en/page-2' },
//       { text: 'Page 3', link: 'en/page-3' }
//     ],
//     'Another Section': [{ text: 'Page 4', link: 'en/page-4' }]
//   }
// }
export const SIDEBAR: Sidebar = {
  en: {
    'Technology & Design': {
      'Sparks': [
        { text: 'Logothon', link: 'en/technology-design/logothon-designing-logos-for-open-source-projects' },
        { text: 'textmode.js', link: 'en/technology-design/textmode-js' },
        { text: 'AI2img: Some Truths', link: 'en/technology-design/ai2img-some-truths' }
      ],
      'Notes': [
        { text: 'Microsoft To Do', link: 'en/technology-design/auto-launch-microsoft-to-do-windows11' },
        // { text: 'npm-scanner.js', link: 'en/technology-design/npm-scanner-js' }
      ],
    },

        
  },
   cn: {
    '技术与设计': {
      '火花': [
        { text: 'Logothon', link: 'cn/technology-design/logothon-designing-logos-for-open-source-projects' },
        { text: 'textmode.js', link: 'cn/technology-design/textmode-js' },
        { text: 'AI2img: Some Truths', link: 'cn/technology-design/ai2img-some-truths' }
      ],
      '笔记': [
        { text: 'Microsoft To Do', link: 'cn/technology-design/auto-launch-microsoft-to-do-windows11' },
        // { text: 'npm-scanner.js', link: 'cn/technology-design/npm-scanner-js' }
      ],
    },

        
  }
}
