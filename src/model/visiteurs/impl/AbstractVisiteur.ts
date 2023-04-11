import NoeudModel from '../../Noeud.model'
import VisiteurNoeud from '../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from './AbstractVisiteurOrchestrateur'

export default abstract class AbstractVisiteur<T>
  extends AbstractVisiteurOrchestrateur<T>
  implements VisiteurNoeud<T, NoeudModel>
{
  visit(node: NoeudModel): T {
    return super.visit(node)
  }
}
