export const SITE = {
  title: 'Pick up the light',
  description: 'Your website description.',
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

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
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
        { text: 'sample 1', link: 'en/technology-design/page-1' },
        { text: 'sample 2', link: 'en/technology-design/page-2' }
      ],
            'Insights': [
        { text: 'sample 3', link: 'en/technology-design/page-3' },
        { text: 'sample 4', link: 'en/technology-design/page-4' }
      ],
    },
    'Society & Culture': {
      'Sparks': [
        { text: 'sample 1', link: 'en/society-culture/page-1' },
        { text: 'sample 2', link: 'en/society-culture/page-2' }
      ],
            'Insights': [
        { text: 'sample 3', link: 'en/society-culture/page-3' },
        { text: 'sample 4', link: 'en/society-culture/page-4' }
      ],
    }
        
  }
}
