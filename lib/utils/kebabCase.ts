//@ts-nocheck
import { slug } from 'github-slugger' // eslint-disable-line

export const kebabCase = (str: string) => slug(str)
