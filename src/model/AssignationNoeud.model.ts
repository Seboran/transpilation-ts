import ExpressionNoeud from './ExpressionNoeud.model'
import LitteralNode from './LitteralNode.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class AssignationNoeud extends ExpressionNoeud {
  constructor(
    public variable: LitteralNode,
    public expression: ExpressionNoeud
  ) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitAssignation(this)
  }
}
