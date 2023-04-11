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

export default class JavascriptOrchestrateur extends AbstractVisiteurOrchestrateur<string> {
  constructor() {
    const orchestrateur: Record<string, VisiteurNoeud<string, NoeudModel>> = {}
    orchestrateur[AdditionNoeud.name] = new JsAdditionVisiteur(orchestrateur)
    orchestrateur[SuperieurNoeud.name] = new JsSuperieurVisiteur(orchestrateur)
    orchestrateur[ConditionNode.name] = new JsConditionVisiteur(orchestrateur)
    orchestrateur[LitteralNoeud.name] = new JsLitteralVisiteur(orchestrateur)
    orchestrateur[AssignationNoeud.name] = new JsAssignationVisiteur(
      orchestrateur
    )
    orchestrateur[NombreNoeud.name] = new JsNombreVisiteur(orchestrateur)
    orchestrateur[ExpressionsNoeud.name] = new JsExpressionsVisiteur(
      orchestrateur
    )
    orchestrateur[SoustractionNoeud.name] = new JsSoutractionVisiteur(
      orchestrateur
    )
    orchestrateur[MultiplicationNoeud.name] = new JsMultiplicationVisiteur(
      orchestrateur
    )
    orchestrateur[FonctionNoeud.name] = new JsFonctionVisiteur(orchestrateur)
    orchestrateur[SiNoeud.name] = new JsSiVisiteur(orchestrateur)
    super(orchestrateur)
  }
}
