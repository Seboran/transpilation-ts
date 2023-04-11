import SuperieurNoeud from '../../../../../model/SuperieurNoeud.model'
import VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsSuperieurVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, SuperieurNoeud>
{
  visit(node: SuperieurNoeud): string {
    return super.visit(node.a) + ' > ' + super.visit(node.b)
  }
}
