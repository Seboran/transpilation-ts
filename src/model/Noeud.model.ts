import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default abstract class NoeudModel {
  abstract accept<T>(visitor: VisiteurNoeud<T>): T
}
