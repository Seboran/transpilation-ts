import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class LitteralNoeud extends ExpressionNoeud {
  constructor(public name: string) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitLitteral(this)
  }
}
