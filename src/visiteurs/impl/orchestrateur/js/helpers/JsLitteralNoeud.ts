import LitteralNoeud from '../../../../../model/LitteralNoeud.model'
import VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsLitteralVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, LitteralNoeud>
{
  visit(node: LitteralNoeud): string {
    return node.name
  }
}
