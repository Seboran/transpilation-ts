import ExpressionNode from './ExpressionNode.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class MultiplicationNode extends ExpressionNode {
  constructor(private a: ExpressionNode, private b: ExpressionNode) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    throw new Error('Method not implemented.')
  }
}
