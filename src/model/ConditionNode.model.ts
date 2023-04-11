import ExpressionNoeud from './ExpressionNoeud.model'
import NoeudModel from './Noeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class ConditionNode extends NoeudModel {
  constructor(public value: ExpressionNoeud) {
    super()
  }
  accept<T>(visitor: VisiteurNoeud<T>): T {
    return visitor.visitCondition(this)
  }
}
