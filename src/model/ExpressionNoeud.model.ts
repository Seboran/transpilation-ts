import NoeudModel from './Noeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default abstract class ExpressionNoeud extends NoeudModel {
  abstract accept<T>(visitor: VisiteurNoeud<T>): T
}
