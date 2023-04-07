import ExpressionNode from './ExpressionNode.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class NumberNode extends ExpressionNode {
  constructor(public value: number) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    throw new Error('Method not implemented.')
  }
}
