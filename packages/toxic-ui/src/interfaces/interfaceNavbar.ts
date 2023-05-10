import type { validBg, validPadding, validShape, validText } from '../types/types'

interface urlI {
  id: number
  text?: string
}

export interface navbarI {
  background?: validBg
  rounded?: validShape
  textColor?: validText
  padding?: validPadding
  brand: {
    id: number
    text?: string
    logo?: string
  }
  urls: urlI[]
}
