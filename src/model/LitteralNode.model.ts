import ExpressionNode from './ExpressionNode.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class LitteralNode extends ExpressionNode {
  constructor(public name: string) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    throw new Error('Method not implemented.')
  }
}
