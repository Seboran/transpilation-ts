import NoeudModel from '../Noeud.model'
import { BOUTON_HTML_NAME } from './node_constantes'

export default class BoutonHtml extends NoeudModel {
  public name: string = BOUTON_HTML_NAME
  constructor(
    public onClick: (...args: any[]) => any,
    public texte: string,
  ) {
    super()
  }
}
