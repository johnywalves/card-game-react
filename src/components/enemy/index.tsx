import EnemyProps from '../../types/EnemyProps'

import { EnemyWrapper } from './styles'

const Enemy = ({ numberCards }: EnemyProps) => {
  return (
    <EnemyWrapper>
      {Array.from({ length: numberCards }).map((_, index) => (
        <div key={index}>{index}</div>
      ))}
    </EnemyWrapper>
  )
}

export default Enemy
