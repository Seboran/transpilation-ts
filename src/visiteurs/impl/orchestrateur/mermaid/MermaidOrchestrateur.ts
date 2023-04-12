import NoeudModel from '../../../../model/Noeud.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../AbstractVisiteurOrchestrateur'

const visiteurMappings: Array<
  [
    new (...args: any[]) => NoeudModel,
    new (...args: any[]) => VisiteurNoeud<string, NoeudModel>
  ]
> = []

export default class MermaidOrchestrateur extends AbstractVisiteurOrchestrateur<string> {
  constructor() {
    const orchestrateur: Record<string, VisiteurNoeud<string, NoeudModel>> = {}
    super(orchestrateur)
    visiteurMappings.forEach(([clazz, visiteurClass]) => {
      this.add(clazz, new visiteurClass(orchestrateur))
    })
  }

  add<T extends NoeudModel>(
    clazz: new (...args: any[]) => T,
    visiteur: VisiteurNoeud<string, T>
  ) {
    this.orchestre[clazz.name] = visiteur
  }
}
