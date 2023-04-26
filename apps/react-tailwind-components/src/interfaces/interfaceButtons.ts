import { ReactNode } from 'react'
import { validPadding, validBg, validText, validBorder, validShape } from '../types/types'

export interface ButtonProps {
  children: ReactNode
  padding?: validPadding
  bg?: validBg
  text?: validText
  border?: validBorder
  shape?: validShape
}
