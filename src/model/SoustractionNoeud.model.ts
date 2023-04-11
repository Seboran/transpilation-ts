import ExpressionNoeud from './ExpressionNoeud.model'
import NoeudModel from './Noeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class SoustractionNoeud extends ExpressionNoeud {
  constructor(public a: ExpressionNoeud, public b: ExpressionNoeud) {
    super()
  }
}
