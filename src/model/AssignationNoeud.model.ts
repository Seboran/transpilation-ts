import ExpressionNoeud from './ExpressionNoeud.model'
import type LitteralNoeud from './LitteralNoeud.model'

export default class AssignationNoeud extends ExpressionNoeud {
  constructor(
    public variable: LitteralNoeud,
    public expression: ExpressionNoeud,
    public final: 'final' | 'default' = 'default',
  ) {
    super()
  }
}
