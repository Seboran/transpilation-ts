import ExpressionNoeud from './ExpressionNoeud.model'

export default class MultiplicationNoeud extends ExpressionNoeud {
  constructor(public a: ExpressionNoeud, public b: ExpressionNoeud) {
    super()
  }
}
