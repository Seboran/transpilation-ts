import ConditionNode from './ConditionNode.model'
import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class SiNode extends NodeModel {
  constructor(
    private condition: ConditionNode,
    private conditionVraieExpression: NodeModel,
    private conditionFausseExpression: NodeModel
  ) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    this.condition.accept(visitor)
    this.conditionVraieExpression.accept(visitor)
    this.conditionFausseExpression.accept(visitor)
  }
}
