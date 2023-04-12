import AdditionNoeud from '../../../../../model/AdditionNoeud.model'
import VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class MermaidAdditionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, AdditionNoeud>
{
  private static id = 0
  visit(node: AdditionNoeud): string {
    const AdditionInitiale =
      `Addition${++MermaidAdditionVisiteur.id} --> ` +
      super.visit(node.a) +
      '\n' +
      `Addition${MermaidAdditionVisiteur.id} --> ` +
      super.visit(node.b) +
      '\n'
    return AdditionInitiale
  }
  static resetId() {
    MermaidAdditionVisiteur.id = 0
  }
}
