import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import type NoeudModel from '../../../../model/Noeud.model'
import NombreNoeud from '../../../../model/NombreNoeud.model'
import type VisiteurNoeud from '../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../AbstractVisiteurOrchestrateur'
import JsNombreVisiteur from '../js/helpers/JsNombreVisiteur'
import CobolAssignationVisiteur from './helpers/CobolAssignationVisiteur'

const visiteurMappings: Array<
  [new (...args: any[]) => NoeudModel, new (...args: any[]) => VisiteurNoeud<string, NoeudModel>]
> = [
  [AssignationNoeud, CobolAssignationVisiteur],
  [NombreNoeud, JsNombreVisiteur],
]

export default class CobolOrchestrateur extends AbstractVisiteurOrchestrateur<string> {
  constructor() {
    const orchestrateur: Record<string, VisiteurNoeud<string, NoeudModel>> = {}
    super(orchestrateur)
    visiteurMappings.forEach(([clazz, visiteurClass]) => {
      this.add(clazz, new visiteurClass(orchestrateur))
    })
  }

  add<T extends NoeudModel>(clazz: new (...args: any[]) => T, visiteur: VisiteurNoeud<string, T>) {
    this.orchestre[clazz.name] = visiteur
  }
}
