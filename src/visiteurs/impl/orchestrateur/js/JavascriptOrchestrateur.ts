import AdditionNoeud from '../../../../model/AdditionNoeud.model'
import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import ConditionNode from '../../../../model/ConditionNode.model'
import ExpressionsNoeud from '../../../../model/ExpressionsNoeud.model'
import FonctionNoeud from '../../../../model/FonctionNoeud.model'
import LitteralNoeud from '../../../../model/LitteralNoeud.model'
import MultiplicationNoeud from '../../../../model/MultiplicationNoeud.model'
import NoeudModel from '../../../../model/Noeud.model'
import NombreNoeud from '../../../../model/NombreNoeud.model'
import SiNoeud from '../../../../model/SiNoeud.model'
import SoustractionNoeud from '../../../../model/SoustractionNoeud.model'
import SuperieurNoeud from '../../../../model/SuperieurNoeud.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../AbstractVisiteurOrchestrateur'
import JsAdditionVisiteur from './helpers/JsAdditionVisiteur'
import JsAssignationVisiteur from './helpers/JsAssignationVisiteur'
import JsConditionVisiteur from './helpers/JsConditionVisiteur'
import JsExpressionsVisiteur from './helpers/JsExpressionsVisiteur'
import JsFonctionVisiteur from './helpers/JsFonctionVisiteur'
import JsLitteralVisiteur from './helpers/JsLitteralNoeud'
import JsMultiplicationVisiteur from './helpers/JsMultiplicationVisiteur'
import JsNombreVisiteur from './helpers/JsNombreVisiteur'
import JsSiVisiteur from './helpers/JsSiVisiteur'
import JsSoutractionVisiteur from './helpers/JsSoutractionVisiteur'
import JsSuperieurVisiteur from './helpers/JsSuperieurVisiteur'

const visiteurMappings: Array<
  [
    new (...args: any[]) => NoeudModel,
    new (...args: any[]) => VisiteurNoeud<string, NoeudModel>
  ]
> = [
  [AdditionNoeud, JsAdditionVisiteur],
  [SuperieurNoeud, JsSuperieurVisiteur],
  [ConditionNode, JsConditionVisiteur],
  [LitteralNoeud, JsLitteralVisiteur],
  [AssignationNoeud, JsAssignationVisiteur],
  [NombreNoeud, JsNombreVisiteur],
  [ExpressionsNoeud, JsExpressionsVisiteur],
  [SoustractionNoeud, JsSoutractionVisiteur],
  [MultiplicationNoeud, JsMultiplicationVisiteur],
  [FonctionNoeud, JsFonctionVisiteur],
  [SiNoeud, JsSiVisiteur],
]

export default class JavascriptOrchestrateur extends AbstractVisiteurOrchestrateur<string> {
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
