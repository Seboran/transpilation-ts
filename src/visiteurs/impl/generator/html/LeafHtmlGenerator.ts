import LeafHtml from '../../../../model/html/leaf.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import { NirinaComponent } from './NirinaComponent'

export default class LeafHtmlGenerator
  implements VisiteurNoeud<NirinaComponent, LeafHtml>
{
  visit({ contenu }: LeafHtml): NirinaComponent {
    return { template: contenu, script: () => {} }
  }
}
