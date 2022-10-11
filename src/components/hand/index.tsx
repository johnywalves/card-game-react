import { CardState } from '../../types/CardProps'
import HandProps from '../../types/HandProps'
import Card from '../card'
import { HandWrapper, HandCardHolder } from './styles'

const Hand = ({ listCards }: HandProps) => {
  return (
    <HandWrapper aria-label="hand">
      {listCards &&
        listCards.map((card, index) => (
          <HandCardHolder key={index} index={index} size={listCards.length}>
            <Card {...card} state={CardState.Hand} />
          </HandCardHolder>
        ))}
    </HandWrapper>
  )
}

export default Hand
