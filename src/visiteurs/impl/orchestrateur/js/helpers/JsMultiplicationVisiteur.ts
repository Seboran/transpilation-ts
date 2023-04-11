import MultiplicationNoeud from '../../../../../model/MultiplicationNoeud.model'
import VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsMultiplicationVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, MultiplicationNoeud>
{
  visit(node: MultiplicationNoeud): string {
    return super.visit(node.a) + ' * ' + super.visit(node.b)
  }
}
