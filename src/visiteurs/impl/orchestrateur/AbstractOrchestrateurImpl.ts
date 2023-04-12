import NoeudModel from '../../../model/Noeud.model'
import VisiteurNoeud from '../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from './AbstractVisiteurOrchestrateur'

export default abstract class AbstractOrchestrateurImpl<
  T
> extends AbstractVisiteurOrchestrateur<T> {
  constructor(
    visiteurMappings: [
      new (...args: any[]) => NoeudModel,
      new (...args: any[]) => VisiteurNoeud<T, NoeudModel>
    ][]
  ) {
    const orchestrateur: Record<string, VisiteurNoeud<T, NoeudModel>> = {}
    super(orchestrateur)
    visiteurMappings.forEach(([clazz, visiteurClass]) => {
      this.add(clazz, new visiteurClass(orchestrateur))
    })
  }

  add<K extends NoeudModel>(
    clazz: new (...args: any[]) => K,
    visiteur: VisiteurNoeud<T, K>
  ) {
    this.orchestre[clazz.name] = visiteur
  }
}
