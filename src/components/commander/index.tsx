import { useIntl } from 'react-intl'

import CommanderProps from '../../types/CommanderProps'
import { Life, Shield } from '../icons'
import {
  CommanderWrapper,
  CommanderValues,
  CommanderHitPoints,
  CommanderDefense,
  CommanderExplain,
  CommanderName,
  CommanderDescription
} from './styles'

const Commander = ({
  initialHitPoints,
  defense,
  name,
  description,
  deploy
}: CommanderProps) => {
  const intl = useIntl()

  const nameIntl = intl.formatMessage({
    id: name
  })
  const descriptionIntl = intl.formatMessage({
    id: description
  })

  return (
    <CommanderWrapper>
      <CommanderValues>
        <CommanderHitPoints aria-label="hitpoint">
          {initialHitPoints} <Life />
        </CommanderHitPoints>
        <CommanderDefense aria-label="defense">
          {defense} <Shield />
        </CommanderDefense>
      </CommanderValues>

      <CommanderExplain>
        <CommanderName aria-label="name">{nameIntl}</CommanderName>
        {!deploy && (
          <CommanderDescription aria-label="description">
            {descriptionIntl}
          </CommanderDescription>
        )}
      </CommanderExplain>
    </CommanderWrapper>
  )
}

export default Commander
