import type SiNoeud from '../../../../../model/SiNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class CobolSiVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, SiNoeud>
{
  visit(node: SiNoeud): string {
    return (
      'IF ' +
      super.visit(node.condition) +
      '\n  ' +
      super.visit(node.conditionVraieExpression) +
      '\nELSE\n  ' +
      super.visit(node.conditionFausseExpression) +
      '\nEND-IF.'
    )
  }
}
