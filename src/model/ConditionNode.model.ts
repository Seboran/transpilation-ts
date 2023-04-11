import ExpressionNoeud from './ExpressionNoeud.model'
import NoeudModel from './Noeud.model'

export default class ConditionNode extends NoeudModel {
  constructor(public value: ExpressionNoeud) {
    super()
  }
}
