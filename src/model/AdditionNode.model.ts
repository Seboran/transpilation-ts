import ExpressionNode from './ExpressionNode.model'
import NodeModel from './Node.model'

export default class AdditionNode extends ExpressionNode {
  accept<T extends NodeModel>(visitor: any): T {
    throw new Error('Method not implemented.')
  }
  constructor(public a: ExpressionNode, public b: ExpressionNode) {
    super()
  }
}
