import NoeudModel from '../Noeud.model'

export default interface VisiteurNoeud<T, V extends NoeudModel> {
  visit(node: V): T
}
