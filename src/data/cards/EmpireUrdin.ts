import CardProps, { CardType, CardReach } from '../../types/CardProps'

const Soldier: CardProps = {
  type: CardType.Creature,
  level: 1,
  name: 'Soldado',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  reach: CardReach.Meelee,
  attack: 2,
  defense: 1
}

const Swordsman: CardProps = {
  type: CardType.Creature,
  level: 2,
  name: 'Espadachim',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  reach: CardReach.Meelee,
  attack: 1,
  defense: 2
}

const Archer: CardProps = {
  type: CardType.Creature,
  level: 2,
  name: 'Arqueiro',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  reach: CardReach.Distance,
  attack: 2,
  defense: 1
}

const FortificationPotion: CardProps = {
  type: CardType.Artifact,
  level: 1,
  name: 'Poção de Fortalecimento',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const InnerFlame: CardProps = {
  type: CardType.Spell,
  level: 1,
  name: 'Chama Interna',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

export default { Soldier, Swordsman, Archer, FortificationPotion, InnerFlame }
