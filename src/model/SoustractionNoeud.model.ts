import ExpressionNoeud from './ExpressionNoeud.model'

export default class SoustractionNoeud extends ExpressionNoeud {
  constructor(
    public a: ExpressionNoeud,
    public b: ExpressionNoeud,
  ) {
    super()
  }
}
