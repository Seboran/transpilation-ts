import type MultiplicationNoeud from '../../../../../model/MultiplicationNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsMultiplicationVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, MultiplicationNoeud>
{
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  visit(node: MultiplicationNoeud): string {
    // TODO coder la multiplication
    return 'TODO multiplication'
  }
}
