import ExpressionNoeud from './ExpressionNoeud.model'

export default class LitteralNoeud extends ExpressionNoeud {
  constructor(public name: string) {
    super()
  }
}
