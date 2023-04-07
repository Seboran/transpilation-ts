import ExpressionNode from './ExpressionNode.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class LitteralNode extends ExpressionNode {
  constructor(public name: string) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitString(this.name)
    visitor.visitLitteral(this)
  }
}
