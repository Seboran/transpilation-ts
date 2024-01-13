import NoeudModel from '../../../model/Noeud.model'
import VisiteurNoeud from '../../VisiteurNoeud'

export default abstract class AbstractVisiteurOrchestrateur<T> {
  constructor(public orchestre: Record<string, VisiteurNoeud<T, NoeudModel>>) {}

  visit(node: NoeudModel): T {
    const visiteur = this.orchestre[node.name]
    if (!visiteur) {
      throw 'Noeud inconnu ' + node.name
    }
    return visiteur.visit(node)
  }
}
