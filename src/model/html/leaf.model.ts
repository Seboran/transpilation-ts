import NoeudModel from '../Noeud.model'
import { leafName } from './node_constantes'

export default class LeafHtml extends NoeudModel {
  public name: string = leafName

  constructor(public contenu: string) {
    super()
  }
}
