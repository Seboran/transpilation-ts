import type AdditionNoeud from '../../../../../model/AdditionNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsAdditionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, AdditionNoeud>
{
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  visit(node: AdditionNoeud): string {
    // TODO coder l'addition
    return 'TODO addition'
  }
}
