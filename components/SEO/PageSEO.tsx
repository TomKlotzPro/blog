import { siteMetadata } from '../../data'

import { CommonSEO } from './CommonSEO'

import type { SEOProps } from './types'

export const PageSEO = ({ title, description }: SEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return (
    <CommonSEO title={title} description={description} ogType='website' ogImage={ogImageUrl} twImage={twImageUrl} />
  )
}
