import ExpressionNoeud from './ExpressionNoeud.model'
import type LitteralNoeud from './LitteralNoeud.model'

export default class FonctionNoeud extends ExpressionNoeud {
  public nom: LitteralNoeud
  public args: ExpressionNoeud[]
  constructor(nom: LitteralNoeud, ...args: ExpressionNoeud[]) {
    super()
    this.nom = nom
    this.args = args
  }
}
