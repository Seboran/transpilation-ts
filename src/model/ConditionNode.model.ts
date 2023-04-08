import ExpressionNode from './ExpressionNode.model'
import NoeudModel from './Noeud.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class ConditionNode extends NoeudModel {
  constructor(public value: ExpressionNode) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitExpression(this.value)
    visitor.visitCondition(this)
  }
}
