import type ExpressionsNoeud from '../../../../../model/ExpressionsNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsExpressionsVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, ExpressionsNoeud>
{
  visit(node: ExpressionsNoeud): string {
    return node.expressions.map(super.visit.bind(this)).join('; ') + ';'
  }
}
