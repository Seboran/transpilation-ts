import NoeudModel from '../../model/Noeud.model'
import VisiteurNoeud from '../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from './orchestrateur/AbstractVisiteurOrchestrateur'

export default abstract class AbstractVisiteur<T>
  extends AbstractVisiteurOrchestrateur<T>
  implements VisiteurNoeud<T, NoeudModel>
{
  visit<K extends NoeudModel>(node: K): T {
    return super.visit(node)
  }
}
