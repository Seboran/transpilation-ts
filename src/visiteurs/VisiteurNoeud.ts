import NoeudModel from '../model/Noeud.model'

export default interface VisiteurNoeud<T, V extends NoeudModel> {
  visit(node: V): T
}
