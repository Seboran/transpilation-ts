import ExpressionNode from './ExpressionNode.model'
import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class SoustractionNode extends ExpressionNode {
  constructor(private a: ExpressionNode, private b: ExpressionNode) {
    super()
  }

  accept(visitor: VisiteurNode): void {
    visitor.visitExpression(this.a)
    visitor.visitExpression(this.b)
  }
}
