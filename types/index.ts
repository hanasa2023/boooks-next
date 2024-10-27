import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface BookData {
  name: string
  dir: string
  size: number | string
  url: string
  updateTime: string
}
