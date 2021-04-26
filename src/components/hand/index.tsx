import { CardState } from '../../types/CardProps'
import HandProps from '../../types/HandProps'
import Card from '../card'
import * as S from './styles'

const Hand = ({ listCards }: HandProps) => {
  return (
    <S.Wrapper aria-label="hand">
      {listCards &&
        listCards.map((card, index) => (
          <S.CardHolder key={index} index={index} size={listCards.length}>
            <Card {...card} state={CardState.Hand} />
          </S.CardHolder>
        ))}
    </S.Wrapper>
  )
}

export default Hand
