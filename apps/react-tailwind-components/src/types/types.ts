export type typeChildren = React.PropsWithChildren<{}>
type PaddingP = `p-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | ''}`
type PaddingPx = `px-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | ''}`
type PaddingPy = `py-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | ''}`
type PaddingPxPy = `px-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | ''} py-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | ''}`

export type validPadding = PaddingP | PaddingPx | PaddingPy | PaddingPxPy

/*
Valid bg values are ----- 
 */
export type validBg = 'bg-primary' | 'bg-secondary' | 'bg-dark' | 'bg-light'
export type validText =
  | 'text-primary'
  | 'text-secondary'
  | 'text-dark'
  | 'text-light'
export type validBorder =
  | 'border-primary'
  | 'border-secondary'
  | 'border-light'
  | 'border-dark'
export type validShape =
  'rounded' | 'rounded-none'
