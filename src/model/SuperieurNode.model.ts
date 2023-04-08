import ExpressionNode from './ExpressionNode.model'
import NoeudModel from './Noeud.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default class SuperieurNode extends ExpressionNode {
  constructor(public a: ExpressionNode, public b: ExpressionNode) {
    super()
  }
  accept(visitor: VisiteurNode): void {
    visitor.visitExpression(this.a)
    visitor.visitExpression(this.b)
    visitor.visitSuperieur(this)
  }
}
