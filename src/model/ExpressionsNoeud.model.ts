import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class ExpressionsNoeud extends ExpressionNoeud {
  public expressions: ExpressionNoeud[]
  constructor(...expressions: ExpressionNoeud[]) {
    super()
    this.expressions = expressions
  }
}
