import ExpressionNode from './ExpressionNode.model'
import LitteralNode from './LitteralNode.model'
import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class AssignationNode extends ExpressionNode {
  constructor(
    public variable: LitteralNode,
    public expression: ExpressionNode
  ) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitAssignation(this)
  }
}
