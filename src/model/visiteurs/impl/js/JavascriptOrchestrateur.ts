import AdditionNoeud from '../../../AdditionNoeud.model'
import AssignationNoeud from '../../../AssignationNoeud.model'
import ConditionNode from '../../../ConditionNode.model'
import ExpressionsNoeud from '../../../ExpressionsNoeud.model'
import FonctionNoeud from '../../../FonctionNoeud.model'
import LitteralNoeud from '../../../LitteralNoeud.model'
import MultiplicationNoeud from '../../../MultiplicationNoeud.model'
import NoeudModel from '../../../Noeud.model'
import NombreNoeud from '../../../NombreNoeud.model'
import SiNoeud from '../../../SiNoeud.model'
import SoustractionNoeud from '../../../SoustractionNoeud.model'
import SuperieurNoeud from '../../../SuperieurNoeud.model'
import VisiteurNoeud from '../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../AbstractVisiteurOrchestrateur'
import JsAdditionVisiteur from './JsAdditionVisiteur'
import JsAssignationVisiteur from './JsAssignationVisiteur'
import JsConditionVisiteur from './JsConditionVisiteur'
import JsExpressionsVisiteur from './JsExpressionsVisiteur'
import JsFonctionVisiteur from './JsFonctionVisiteur'
import JsLitteralVisiteur from './JsLitteralNoeud'
import JsMultiplicationVisiteur from './JsMultiplicationVisiteur'
import JsNombreVisiteur from './JsNombreVisiteur'
import JsSiVisiteur from './JsSiVisiteur'
import JsSoutractionVisiteur from './JsSoutractionVisiteur'
import JsSuperieurVisiteur from './JsSuperieurVisiteur'

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
    this.orchestrateur[clazz.name] = visiteur
  }
}
