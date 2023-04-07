import ExpressionNode from './ExpressionNode.model'
import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class ConditionNode extends NodeModel {
  accept(visitor: VisiteurNode): void {
    throw new Error('Method not implemented.')
  }
  constructor(public value: ExpressionNode) {
    super()
  }
}
