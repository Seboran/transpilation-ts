import type SiNoeud from '../../../../../model/SiNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsSiVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, SiNoeud>
{
  visit(node: SiNoeud): string {
    return (
      'if (' +
      super.visit(node.condition) +
      ') { ' +
      super.visit(node.conditionVraieExpression) +
      ' } else { ' +
      super.visit(node.conditionFausseExpression) +
      ' }'
    )
  }
}
