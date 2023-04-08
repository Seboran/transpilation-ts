import ConditionNode from './ConditionNode.model'
import NoeudModel from './Noeud.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class SiNode extends NoeudModel {
  constructor(
    public condition: ConditionNode,
    public conditionVraieExpression: NoeudModel,
    public conditionFausseExpression: NoeudModel
  ) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitSi(this)
  }
}
