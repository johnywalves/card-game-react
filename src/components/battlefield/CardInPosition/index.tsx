import CardProps, { CardState } from '../../../types/CardProps'
import Card from '../../card'

type CardInPositionProps = {
  x: number
  y: number
  deck: Array<Array<CardProps>>
  state?: CardState
}

const CardInPosition = ({ x, y, deck, state }: CardInPositionProps) => {
  if (deck[x][y - 1].name === '') {
    return <div></div>
  }

  return (
    <div>
      <Card {...deck[x][y - 1]} state={state || CardState.Deploy} />
    </div>
  )
}

export default CardInPosition
