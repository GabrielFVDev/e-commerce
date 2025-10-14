import type React from 'react'

export interface AboutProps {
  title: string
  firstParagraph: string | React.ReactNode
  secondParagraph: string | React.ReactNode
  thirdParagraph: string
  fourthParagraph: string
}
