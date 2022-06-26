import NextImage from 'next/image'

import type { ImageProps } from 'next/image'

export const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />
