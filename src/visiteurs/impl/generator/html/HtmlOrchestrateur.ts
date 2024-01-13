import { NoeudModel } from '../../../../model'
import {
  BOUTON_HTML_NAME,
  elements_name,
  ifName,
  leafName,
} from '../../../../model/html/node_constantes'
import VisiteurNoeud from '../../../VisiteurNoeud'
import { AbstractVisiteurOrchestrateur } from '../../orchestrateur'
import BoutonHtmlGenerator from './BoutonHtmlGenerator'
import ElementsHtmlGenerator from './ElementsHtmlGenerator'
import IfHtmlGenerator from './IfHtmlGenerator'
import LeafHtmlGenerator from './LeafHtmlGenerator'
import { NirinaComponent } from './NirinaComponent'

const visiteurMappings: Array<
  [string, new (...args: any[]) => VisiteurNoeud<NirinaComponent, NoeudModel>]
> = [
  [BOUTON_HTML_NAME, BoutonHtmlGenerator],
  [elements_name, ElementsHtmlGenerator],
  [ifName, IfHtmlGenerator],
  [leafName, LeafHtmlGenerator],
]

export default class HtmlOrchestrateur extends AbstractVisiteurOrchestrateur<NirinaComponent> {
  constructor() {
    const orchestrateur: Record<
      string,
      VisiteurNoeud<NirinaComponent, NoeudModel>
    > = {}
    super(orchestrateur)
    visiteurMappings.forEach(([clazz, visiteurClass]) => {
      this.add(clazz, new visiteurClass(orchestrateur))
    })
  }

  add<T extends NoeudModel>(
    clazz: string,
    visiteur: VisiteurNoeud<NirinaComponent, T>,
  ) {
    this.orchestre[clazz] = visiteur
  }
}
