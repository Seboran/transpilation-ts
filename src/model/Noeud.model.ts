import VisiteurNoeud from './visiteurs/VisiteurNode'

export default abstract class NoeudModel {
  abstract accept(visitor: VisiteurNoeud): void
}
