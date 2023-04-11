import ExpressionNoeud from './ExpressionNoeud.model'

export default class AdditionNoeud extends ExpressionNoeud {
  constructor(public a: ExpressionNoeud, public b: ExpressionNoeud) {
    super()
  }
}
