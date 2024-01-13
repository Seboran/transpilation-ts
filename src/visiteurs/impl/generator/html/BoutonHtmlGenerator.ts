import BoutonHtml from '../../../../model/html/bouton.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import { NirinaComponent } from './NirinaComponent'

export default class BoutonHtmlGenerator
  implements VisiteurNoeud<NirinaComponent, BoutonHtml>
{
  static nombreBoutons = 0
  visit(node: BoutonHtml): NirinaComponent {
    const id = ++BoutonHtmlGenerator.nombreBoutons
    const { texte, onClick } = node
    return {
      template: `<button btn-${id}>${texte}</button>`,
      script: () => {
        const component = document.querySelector(`[btn-${id}]`)

        if (component == null) {
          return
        }

        component.addEventListener('click', onClick)
      },
    }
  }
}
