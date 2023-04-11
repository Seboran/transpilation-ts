import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class ExpressionsNoeud extends ExpressionNoeud {
  public expressions: ExpressionNoeud[]
  constructor(...expressions: ExpressionNoeud[]) {
    super()
    this.expressions = expressions
  }
  accept<T>(visitor: VisiteurNoeud<T>): T {
    return visitor.visitExpressions(this)
  }
}
