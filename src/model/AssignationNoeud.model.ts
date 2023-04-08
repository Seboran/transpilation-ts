import ExpressionNoeud from './ExpressionNoeud.model'
import LitteralNoeud from './LitteralNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class AssignationNoeud extends ExpressionNoeud {
  constructor(
    public variable: LitteralNoeud,
    public expression: ExpressionNoeud
  ) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitAssignation(this)
  }
}
