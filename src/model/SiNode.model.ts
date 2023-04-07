import ConditionNode from './ConditionNode.model'
import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class SiNode extends NodeModel {
  constructor(
    public condition: ConditionNode,
    public conditionVraieExpression: NodeModel,
    public conditionFausseExpression: NodeModel
  ) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    // visitor.visitCondition(this.condition)
    // visitor.visitExpression(this.conditionVraieExpression)
    // visitor.visitExpression(this.conditionFausseExpression)
    visitor.visitSi(this)
  }
}
