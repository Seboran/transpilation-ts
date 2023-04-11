import ExpressionNoeud from './ExpressionNoeud.model'

export default class ExpressionsNoeud extends ExpressionNoeud {
  public expressions: ExpressionNoeud[]
  constructor(...expressions: ExpressionNoeud[]) {
    super()
    this.expressions = expressions
  }
}
