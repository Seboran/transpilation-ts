import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default abstract class NoeudModel {
  abstract accept(visitor: VisiteurNoeud): void
}
