import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class SuperieurNoeud extends ExpressionNoeud {
  constructor(public a: ExpressionNoeud, public b: ExpressionNoeud) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitExpression(this.a)
    visitor.visitExpression(this.b)
    visitor.visitSuperieur(this)
  }
}
