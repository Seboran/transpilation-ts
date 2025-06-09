import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import ConditionNode from '../../../../model/ConditionNode.model'
import ExpressionsNoeud from '../../../../model/ExpressionsNoeud.model'
import LitteralNoeud from '../../../../model/LitteralNoeud.model'
import type NoeudModel from '../../../../model/Noeud.model'
import NombreNoeud from '../../../../model/NombreNoeud.model'
import SiNoeud from '../../../../model/SiNoeud.model'
import SuperieurNoeud from '../../../../model/SuperieurNoeud.model'
import type VisiteurNoeud from '../../../VisiteurNoeud'
import {
  AbstractVisiteurOrchestrateur,
  CobolAssignationVisiteur,
  JsConditionVisiteur,
  JsLitteralVisiteur,
  JsNombreVisiteur,
  JsSuperieurVisiteur,
} from '../../orchestrateur'
import CobolSiVisiteur from '../../orchestrateur/cobol/helpers/CobolSiVisiteur'

const visiteurMappings: Array<
  [new (...args: any[]) => NoeudModel, new (...args: any[]) => VisiteurNoeud<string, NoeudModel>]
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
  [SiNoeud, CobolSiVisiteur],
  [ConditionNode, JsConditionVisiteur],
  [SuperieurNoeud, JsSuperieurVisiteur],
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
