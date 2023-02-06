import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deployMyCard } from '../../../reducer/battlefieldSlice'
import { BattlefieldStatus } from '../../../types/BattlefieldStatus'
import CardProps, { CardState } from '../../../types/CardProps'
import StateProps from '../../../types/StateProps'
import Card from '../../card'

type CardInPositionProps = {
  x: number
  y: number
  deck: Array<Array<CardProps>>
  ownField?: boolean
  state?: CardState
}

const CardInPosition = ({
  x,
  y,
  deck,
  ownField,
  state
}: CardInPositionProps) => {
  const currentStatus = useSelector(
    (state: StateProps) => state.battlefield.currentStatus
  )

  const dispatch = useDispatch()

  const deployCard = useCallback(
    () => dispatch(deployMyCard({ x, y })),
    [x, y, dispatch]
  )

  if (deck[x][y - 1].name === '') {
    if (BattlefieldStatus.ChoosingDeployPlace === currentStatus && !!ownField) {
      return <div className="chooseable" onClick={deployCard} />
    }

    return <div />
  }

  return (
    <div>
      <Card {...deck[x][y - 1]} state={state || CardState.Deploy} />
    </div>
  )
}

export default CardInPosition
