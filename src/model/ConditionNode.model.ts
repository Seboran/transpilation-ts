import ExpressionNoeud from './ExpressionNoeud.model'
import NoeudModel from './Noeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class ConditionNode extends NoeudModel {
  constructor(public value: ExpressionNoeud) {
    super()
  }
}
