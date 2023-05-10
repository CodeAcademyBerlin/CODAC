import { ReactNode } from 'react'

import type {
  validBg,
  validBorder,
  validPadding,
  validShape,
  validText,
} from '../types/types'

export interface ButtonProps {
  label?: string
  padding?: validPadding
  bg?: validBg
  text?: validText
  border?: validBorder
  shape?: validShape
}
