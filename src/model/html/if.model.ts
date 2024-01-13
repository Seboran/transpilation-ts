import NoeudModel from '../Noeud.model'
import { ifName } from './node_constantes'

export default class IfHtml extends NoeudModel {
  public name: string = ifName

  constructor(
    public condition: ((valeur: boolean) => void)[],
    public enfant: NoeudModel,
  ) {
    super()
  }
}
