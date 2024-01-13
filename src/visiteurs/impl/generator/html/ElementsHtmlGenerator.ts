import ElementsHtml from '../../../../model/html/elements.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import { AbstractVisiteurOrchestrateur } from '../../orchestrateur'
import { NirinaComponent } from './NirinaComponent'

export default class ElementsHtmlGenerator
  extends AbstractVisiteurOrchestrateur<NirinaComponent>
  implements VisiteurNoeud<NirinaComponent, ElementsHtml>
{
  visit(node: ElementsHtml): NirinaComponent {
    const parsedChildren = node.expressions.map(super.visit.bind(this))
    const template = parsedChildren.map(({ template }) => template).join('')
    return {
      template,
      script: () => {
        parsedChildren.forEach(({ template, script }) => {
          script()
        })
      },
    }
  }
}
