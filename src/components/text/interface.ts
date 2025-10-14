import type React from 'react'

export interface TextProps {
  children: React.ReactNode
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'semibold' | 'extrabold'
  size?: 12 | 14 | 16 | 20 | 24 | 32 | 34
  align?: 'left' | 'center' | 'right' | 'justify'
  font?: 'inter' | 'montserrat'
  color?: 'white' | 'black'
  lineHeight?: 20 | 22 | 34 | 36
  transparent?: 60
}
