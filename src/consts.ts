export const SITE = {
  title: 'Documentation',
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
export const SIDEBAR: Sidebar = {
  cn: {
    'Section Header': [
      { text: 'Introduction', link: 'cn/introduction' },
      { text: 'Page 2', link: 'cn/page-2' },
      { text: 'Page 3', link: 'cn/page-3' }
    ],
    'Another Section': [{ text: 'Page 4', link: 'cn/page-4' }]
  }
}
