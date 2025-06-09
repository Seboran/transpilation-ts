import ExpressionNoeud from './ExpressionNoeud.model'

export default class SuperieurNoeud extends ExpressionNoeud {
  constructor(
    public a: ExpressionNoeud,
    public b: ExpressionNoeud,
  ) {
    super()
  }
}
