import { useDispatch } from 'react-redux'

import { choosePlaceDeployMyCard } from '../../reducer/battlefieldSlice'
import { CardState } from '../../types/CardProps'
import HandProps from '../../types/HandProps'
import Card from '../card'

import { HandWrapper, HandCardHolder } from './styles'

const Hand = ({ listCards }: HandProps) => {
  const dispatch = useDispatch()

  const choosePlace = (index: number) => () =>
    dispatch(choosePlaceDeployMyCard({ position: index }))

  return (
    <HandWrapper aria-label="hand">
      {listCards &&
        listCards.map((card, index) => (
          <HandCardHolder key={index} index={index} size={listCards.length}>
            <Card
              {...card}
              state={CardState.Hand}
              deployCard={choosePlace(index)}
            />
          </HandCardHolder>
        ))}
    </HandWrapper>
  )
}

export default Hand
