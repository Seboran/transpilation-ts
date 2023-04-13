import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import ExpressionsNoeud from '../../../../model/ExpressionsNoeud.model'
import LitteralNoeud from '../../../../model/LitteralNoeud.model'
import NoeudModel from '../../../../model/Noeud.model'
import NombreNoeud from '../../../../model/NombreNoeud.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../AbstractVisiteurOrchestrateur'
import JsExpressionsVisiteur from '../js/helpers/JsExpressionsVisiteur'
import JsLitteralVisiteur from '../js/helpers/JsLitteralNoeud'
import JsNombreVisiteur from '../js/helpers/JsNombreVisiteur'
import CobolAssignationVisiteur from './helpers/CobolAssignationVisiteur'

const visiteurMappings: Array<
  [
    new (...args: any[]) => NoeudModel,
    new (...args: any[]) => VisiteurNoeud<string, NoeudModel>
  ]
> = [
  [AssignationNoeud, CobolAssignationVisiteur],
  [NombreNoeud, JsNombreVisiteur],
  [
    ExpressionsNoeud,
    class extends AbstractVisiteurOrchestrateur<string> {
      visit(node: ExpressionsNoeud): string {
        return node.expressions.map(super.visit.bind(this)).join('\n')
      }
    },
  ],
  [LitteralNoeud, JsLitteralVisiteur],
]

export default class CobolOrchestrateur extends AbstractVisiteurOrchestrateur<string> {
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
