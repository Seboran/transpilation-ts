import ExpressionNoeud from './ExpressionNoeud.model'

export default class NombreNoeud extends ExpressionNoeud {
  constructor(public value: number) {
    super()
  }
}
