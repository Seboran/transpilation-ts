import NoeudModel from '../Noeud.model'
import { elements_name } from './node_constantes'

export default class ElementsHtml extends NoeudModel {
  public name: string = elements_name

  public expressions: NoeudModel[]
  constructor(...expressions: NoeudModel[]) {
    super()
    this.expressions = expressions
  }
}
