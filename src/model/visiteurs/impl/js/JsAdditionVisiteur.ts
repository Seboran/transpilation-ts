import AdditionNoeud from '../../../AdditionNoeud.model'
import VisiteurNoeud from '../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../AbstractVisiteurOrchestrateur'

export default class JsAdditionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, AdditionNoeud>
{
  visit(node: AdditionNoeud): string {
    return super.visit(node.a) + ' + ' + super.visit(node.b)
  }
}
