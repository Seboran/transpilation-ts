import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class MultiplicationNoeud extends ExpressionNoeud {
  constructor(public a: ExpressionNoeud, public b: ExpressionNoeud) {
    super()
  }
  accept<T>(visitor: VisiteurNoeud<T>): T {
    return visitor.visitMultiplication(this)
  }
}
