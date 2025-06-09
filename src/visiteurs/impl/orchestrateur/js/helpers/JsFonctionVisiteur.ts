import type FonctionNoeud from '../../../../../model/FonctionNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsFonctionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, FonctionNoeud>
{
  visit(node: FonctionNoeud): string {
    return super.visit(node.nom) + '(' + node.args.map(super.visit.bind(this)).join(',') + ')'
  }
}
