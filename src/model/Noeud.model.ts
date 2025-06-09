import type VisiteurNoeud from '../visiteurs/VisiteurNoeud'

export default abstract class NoeudModel {
  accept<T>(visitor: VisiteurNoeud<T, NoeudModel>): T {
    return visitor.visit(this)
  }
}
