import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default abstract class NoeudModel {
  accept<T>(visitor: VisiteurNoeud<T>): T {
    return visitor.visit(this)
  }
}
