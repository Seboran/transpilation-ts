import IfHtml from '../../../../model/html/if.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import { AbstractVisiteurOrchestrateur } from '../../orchestrateur'
import { NirinaComponent } from './NirinaComponent'

export default class IfHtmlGenerator
  extends AbstractVisiteurOrchestrateur<NirinaComponent>
  implements VisiteurNoeud<NirinaComponent, IfHtml>
{
  static nombreIfHtml = 0
  visit({ condition, enfant }: IfHtml): NirinaComponent {
    const id = IfHtmlGenerator.nombreIfHtml
    const nirinaComponent = super.visit(enfant)
    return {
      template: `<div if-${id} />`,
      script: () => {
        nirinaComponent.script()

        condition.push((valeur) => {
          const nIf = document.querySelector(`[if-${id}]`)
          if (valeur) {
            nIf!.innerHTML = `<div if-${id}>${nirinaComponent.template}</div>`
          } else {
            nIf!.innerHTML = `<div if-${id}/>`
          }
        })
      },
    }
  }
}
