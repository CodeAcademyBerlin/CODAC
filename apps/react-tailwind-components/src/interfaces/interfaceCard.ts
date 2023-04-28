import { validBg } from '../types/types'

export interface CardProps {
  key: number
  title?: string
  subtitle?: string
  img?: string
  text?: string
  cta?: string
  bg?: validBg
}
