import ExpressionNoeud from './ExpressionNoeud.model'
import LitteralNoeud from './LitteralNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class AssignationNoeud extends ExpressionNoeud {
  constructor(
    public variable: LitteralNoeud,
    public expression: ExpressionNoeud,
    public final: 'final' | 'default' = 'default'
  ) {
    super()
  }
}
