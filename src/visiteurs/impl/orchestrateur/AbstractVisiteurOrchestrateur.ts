import type NoeudModel from '../../../model/Noeud.model'
import type VisiteurNoeud from '../../VisiteurNoeud'

export default abstract class AbstractVisiteurOrchestrateur<T> {
  constructor(public orchestre: Record<string, VisiteurNoeud<T, NoeudModel>>) {}

  visit(node: NoeudModel): T {
    const visiteur = this.orchestre[node.constructor.name]
    if (!visiteur) {
      throw 'Noeud inconnu ' + node.constructor.name
    }
    return visiteur.visit(node)
  }
}
