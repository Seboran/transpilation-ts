import ExpressionNoeud from './ExpressionNoeud.model'
import LitteralNoeud from './LitteralNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class FonctionNoeud extends ExpressionNoeud {
  public nom: LitteralNoeud
  public args: ExpressionNoeud[]
  constructor(nom: LitteralNoeud, ...args: ExpressionNoeud[]) {
    super()
    this.nom = nom
    this.args = args
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitFonction(this)
  }
}
