import LitteralNoeud from '../../../../../model/LitteralNoeud.model'
import NoeudModel from '../../../../../model/Noeud.model'
import VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class MermaidLitteralVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, LitteralNoeud>
{
  visit(node: LitteralNoeud): string {
    return node.name
  }
}
