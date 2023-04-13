import AdditionNoeud from '../../../../../model/AdditionNoeud.model'
import VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class CobolAdditionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, AdditionNoeud> {
    visit(node: AdditionNoeud): string {
      return super.visit(node.a)
    }
  }
