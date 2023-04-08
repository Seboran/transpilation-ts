import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class NumberNoeud extends ExpressionNoeud {
  constructor(public value: number) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitNumberValue(this.value)
    visitor.visitNumber(this)
  }
}
