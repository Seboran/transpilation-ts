import VisiteurNoeud from '../visiteurs/VisiteurNoeud'

export default abstract class NoeudModel {
  public name = ''
  accept<T>(visitor: VisiteurNoeud<T, NoeudModel>): T {
    return visitor.visit(this)
  }
}
