import VisiteurNode from './visiteurs/VisiteurNode'

export default abstract class NodeModel {
  abstract accept(visitor: VisiteurNode): void
}
