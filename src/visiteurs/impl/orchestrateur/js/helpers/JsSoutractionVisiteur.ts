import type SoustractionNoeud from '../../../../../model/SoustractionNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsSoutractionVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, SoustractionNoeud>
{
  visit(node: SoustractionNoeud): string {
    return super.visit(node.a) + ' - ' + super.visit(node.b)
  }
}
