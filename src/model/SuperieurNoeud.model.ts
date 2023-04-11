import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class SuperieurNoeud extends ExpressionNoeud {
  constructor(public a: ExpressionNoeud, public b: ExpressionNoeud) {
    super()
  }
  accept<T>(visitor: VisiteurNoeud<T>): T {
    return visitor.visitSuperieur(this)
  }
}
