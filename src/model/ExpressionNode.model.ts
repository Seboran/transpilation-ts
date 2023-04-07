import NodeModel from './Node.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default abstract class ExpressionNode extends NodeModel {
  abstract accept(visitor: VisiteurNode): void
}
