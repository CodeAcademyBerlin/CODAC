import { validPadding, validBg, validText, validBorder } from '../types/types'

export interface ButtonProps {
  children: React.ReactNode
  padding?: validPadding
  bg?: validBg
  text?: validText
  border?: validBorder
}
