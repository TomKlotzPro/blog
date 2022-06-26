export type SEOProps = {
  title: string
  description: string
}

export type CommonSEOProps = {
  ogType: string
  ogImage:
    | string
    | {
        '@type': string
        url: string
      }[]
  twImage: string
  canonicalUrl?: string
} & SEOProps
