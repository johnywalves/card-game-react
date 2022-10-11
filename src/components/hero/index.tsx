import HeroProps from '../../types/HeroProps'
import {
  HeroWrapper,
  HeroHitPoints,
  HeroDefense,
  HeroName,
  HeroDescription
} from './styles'

const Hero = ({ initialHitPoints, defense, name, description }: HeroProps) => {
  return (
    <HeroWrapper>
      <HeroHitPoints aria-label="hitpoint">{initialHitPoints}</HeroHitPoints>
      <HeroName aria-label="name">{name}</HeroName>
      <HeroDescription aria-label="description">{description}</HeroDescription>
      <HeroDefense aria-label="defense">{defense}</HeroDefense>
    </HeroWrapper>
  )
}

export default Hero
