import NoeudModel from './Noeud.model'
import VisiteurNode from './visiteurs/VisiteurNode'

export default abstract class ExpressionNode extends NoeudModel {
  abstract accept(visitor: VisiteurNode): void
}
