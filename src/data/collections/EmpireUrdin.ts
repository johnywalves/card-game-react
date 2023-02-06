import LanguageKeys from '../../lang/keys.json'
import CardProps, { CardType, CardReach } from '../../types/CardProps'
import CommanderProps from '../../types/CommanderProps'

const Soldier: CardProps = {
  id: '001001',
  type: CardType.Creature,
  level: 2,
  name: LanguageKeys.collections.empireurdin.cards.soldier.name,
  description: LanguageKeys.collections.empireurdin.cards.soldier.description,
  reach: CardReach.Meelee,
  attack: 1,
  defense: 1
}

const Swordsman: CardProps = {
  id: '001002',
  type: CardType.Creature,
  level: 4,
  name: LanguageKeys.collections.empireurdin.cards.swordsman.name,
  description: LanguageKeys.collections.empireurdin.cards.swordsman.description,
  reach: CardReach.Meelee,
  attack: 4,
  defense: 0
}

const Archer: CardProps = {
  id: '001003',
  type: CardType.Creature,
  level: 4,
  name: LanguageKeys.collections.empireurdin.cards.archer.name,
  description: LanguageKeys.collections.empireurdin.cards.archer.description,
  reach: CardReach.Distance,
  attack: 2,
  defense: 2
}

const FortificationPotion: CardProps = {
  id: '001004',
  type: CardType.Artifact,
  level: 2,
  name: LanguageKeys.collections.empireurdin.cards.fortificationPotion.name,
  description:
    LanguageKeys.collections.empireurdin.cards.fortificationPotion.description
}

const InnerFlame: CardProps = {
  id: '001005',
  type: CardType.Spell,
  level: 1,
  name: LanguageKeys.collections.empireurdin.cards.innerFlame.name,
  description: LanguageKeys.collections.empireurdin.cards.innerFlame.description
}

const Cards = { Soldier, Swordsman, Archer, FortificationPotion, InnerFlame }

const Emperor: CommanderProps = {
  id: '001C01',
  initialHitPoints: 5,
  defense: 1,
  name: LanguageKeys.collections.empireurdin.commanders.emperor.name,
  description:
    LanguageKeys.collections.empireurdin.commanders.emperor.description
}

const Warlock: CommanderProps = {
  id: '001C02',
  initialHitPoints: 3,
  defense: 3,
  name: LanguageKeys.collections.empireurdin.commanders.warlock.name,
  description:
    LanguageKeys.collections.empireurdin.commanders.warlock.description
}

const Commanders = { Emperor, Warlock }

export default {
  Commanders,
  Cards
}
