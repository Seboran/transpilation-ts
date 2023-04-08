import ExpressionNoeud from './ExpressionNoeud.model'
import VisiteurNoeud from './visiteurs/VisiteurNoeud'

export default class LitteralNode extends ExpressionNoeud {
  constructor(public name: string) {
    super()
  }
  accept(visitor: VisiteurNoeud): void {
    visitor.visitString(this.name)
    visitor.visitLitteral(this)
  }
}
