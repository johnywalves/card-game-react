import { Coin } from '../icons'

import { CommandPointsWrapper } from './styles'

type CommandPointsProps = {
  points: number
}

const CommandPoints = ({ points }: CommandPointsProps) => {
  return (
    <CommandPointsWrapper>
      <Coin /> {points}
    </CommandPointsWrapper>
  )
}

export default CommandPoints
