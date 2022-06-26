import Head from 'next/head'
import { useRouter } from 'next/router'

import { siteMetadata } from '../../data'

import { CommonSEO } from './CommonSEO'

import type { SEOProps } from './types'

export const TagSEO = ({ title, description }: SEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <CommonSEO title={title} description={description} ogType='website' ogImage={ogImageUrl} twImage={twImageUrl} />
      <Head>
        <link
          rel='alternate'
          type='application/rss+xml'
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}
