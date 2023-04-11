import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class NombreNoeud extends ExpressionNoeud {
  constructor(public value: number) {
    super()
  }
}
