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
    super(orchestrateur)
    this.add(AdditionNoeud, new JsAdditionVisiteur(orchestrateur))
    this.add(SuperieurNoeud, new JsSuperieurVisiteur(orchestrateur))
    this.add(ConditionNode, new JsConditionVisiteur(orchestrateur))
    this.add(LitteralNoeud, new JsLitteralVisiteur(orchestrateur))
    this.add(AssignationNoeud, new JsAssignationVisiteur(orchestrateur))
    this.add(NombreNoeud, new JsNombreVisiteur(orchestrateur))
    this.add(ExpressionsNoeud, new JsExpressionsVisiteur(orchestrateur))
    this.add(SoustractionNoeud, new JsSoutractionVisiteur(orchestrateur))
    this.add(MultiplicationNoeud, new JsMultiplicationVisiteur(orchestrateur))
    this.add(FonctionNoeud, new JsFonctionVisiteur(orchestrateur))
    this.add(SiNoeud, new JsSiVisiteur(orchestrateur))
  }

  add<T extends NoeudModel>(
    clazz: new (...args: any[]) => T,
    visiteur: VisiteurNoeud<string, T>
  ) {
    this.orchestrateur[clazz.name] = visiteur
  }
}
