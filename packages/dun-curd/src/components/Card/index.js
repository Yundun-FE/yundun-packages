import Card from './Card'
// import ColumnStatus from './ColumnStatus'

Card.install = Vue => {
  Vue.component(Card.name, Card)
  // Vue.component(ColumnStatus.name, ColumnStatus)
}

export default Card
