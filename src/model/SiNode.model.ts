import ConditionNode from './ConditionNode.model'
import NoeudModel from './Noeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class SiNode extends NoeudModel {
  constructor(
    public condition: ConditionNode,
    public conditionVraieExpression: NoeudModel,
    public conditionFausseExpression: NoeudModel
  ) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitSi(this)
  }
}
