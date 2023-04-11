import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNoeud from '../../AssignationNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNoeud from '../../ExpressionNoeud.model'
import ExpressionsNoeud from '../../ExpressionsNoeud.model'
import FonctionNoeud from '../../FonctionNoeud.model'
import LitteralNoeud from '../../LitteralNoeud.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import NoeudModel from '../../Noeud.model'
import NombreNoeud from '../../NombreNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNoeud from '../../SuperieurNoeud.model'
import VisiteurNoeud from '../VisiteurNoeud'

export default abstract class AbstractVisiteur<T> implements VisiteurNoeud<T> {
  visit(node: NoeudModel): T {
    if (node instanceof AdditionNoeud) {
      return this.visitAddition(node)
    } else if (node instanceof ConditionNode) {
      return this.visitCondition(node)
    } else if (node instanceof LitteralNoeud) {
      return this.visitLitteral(node)
    } else if (node instanceof MultiplicationNoeud) {
      return this.visitMultiplication(node)
    } else if (node instanceof NombreNoeud) {
      return this.visitNumber(node)
    } else if (node instanceof SiNoeud) {
      return this.visitSi(node)
    } else if (node instanceof SoustractionNoeud) {
      return this.visitSoustraction(node)
    } else if (node instanceof SuperieurNoeud) {
      return this.visitSuperieur(node)
    } else if (node instanceof AssignationNoeud) {
      return this.visitAssignation(node)
    } else if (node instanceof FonctionNoeud) {
      return this.visitFonction(node)
    } else {
      throw new Error('Expression inconnue')
    }
  }
  abstract visitFonction(node: FonctionNoeud): T
  abstract visitExpressions(node: ExpressionsNoeud): T
  abstract visitAssignation(node: AssignationNoeud): T
  abstract visitNumberValue(node: number): T
  abstract visitString(node: string): T
  abstract visitAddition(node: AdditionNoeud): T
  abstract visitCondition(node: ConditionNode): T
  abstract visitLitteral(node: LitteralNoeud): T
  abstract visitMultiplication(node: MultiplicationNoeud): T
  abstract visitNumber(node: NombreNoeud): T
  abstract visitSi(node: SiNoeud): T
  abstract visitSoustraction(node: SoustractionNoeud): T
  abstract visitSuperieur(node: SuperieurNoeud): T
}
