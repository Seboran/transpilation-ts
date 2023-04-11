import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class LitteralNoeud extends ExpressionNoeud {
  constructor(public name: string) {
    super()
  }
  accept<T>(visitor: VisiteurNoeud<T>): T {
    return visitor.visitLitteral(this)
  }
}
