import ExpressionNode from './ExpressionNode.model'
import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class ConditionNode extends NodeModel {
  constructor(public value: ExpressionNode) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitExpression(this.value)
    visitor.visitCondition(this)
  }
}
