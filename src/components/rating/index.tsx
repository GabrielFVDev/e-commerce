import { StarHalfIcon, StarIcon } from '@phosphor-icons/react'
import type { RatingProps } from './interface'

export function Rating({ rating }: RatingProps) {
  const stars = []
  if (rating < 0 || rating > 5) {
    throw new Error('Avaliação deve estar entre 0 e 5')
  }

  while (rating >= 1) {
    stars.push(<StarIcon size={15} weight="fill" color="#FFC633" />)
    rating--
  }

  if (rating > 0) {
    stars.push(<StarHalfIcon size={15} weight="fill" color="#FFC633" />)
  }

  return <>{stars}</>
}
