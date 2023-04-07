import ExpressionNode from './ExpressionNode.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class AdditionNode extends ExpressionNode {
  constructor(public a: ExpressionNode, public b: ExpressionNode) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitExpression(this.a)
    visitor.visitExpression(this.b)
    visitor.visitAddition(this)
  }
}
