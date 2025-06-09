import type ConditionNode from '../../../../../model/ConditionNode.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsConditionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, ConditionNode>
{
  visit(node: ConditionNode): string {
    return super.visit(node.value)
  }
}
