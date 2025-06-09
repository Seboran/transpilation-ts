import type NoeudModel from '../../model/Noeud.model'
import type VisiteurNoeud from '../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from './orchestrateur/AbstractVisiteurOrchestrateur'

export default abstract class AbstractVisiteur<T>
  extends AbstractVisiteurOrchestrateur<T>
  implements VisiteurNoeud<T, NoeudModel>
{
  visit(node: NoeudModel): T {
    return super.visit(node)
  }
}
