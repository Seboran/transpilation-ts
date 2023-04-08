import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNoeud from '../../AssignationNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNoeud from '../../ExpressionNoeud.model'
import LitteralNoeud from '../../LitteralNoeud.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import VisiteurNoeud from '../VisiteurNoeud'

export default abstract class AbstractVisiteur implements VisiteurNoeud {
  abstract visitAssignation(node: AssignationNoeud): AssignationNoeud
  abstract visitNumberValue(node: number): number
  abstract visitString(node: string): string
  abstract visitAddition(node: AdditionNoeud): AdditionNoeud
  abstract visitCondition(node: ConditionNode): ConditionNode
  visitExpression(node: ExpressionNoeud): ExpressionNoeud {
    if (node instanceof AdditionNoeud) {
      return this.visitAddition(node)
    } else if (node instanceof ConditionNode) {
      return this.visitCondition(node)
    } else if (node instanceof LitteralNoeud) {
      return this.visitLitteral(node)
    } else if (node instanceof MultiplicationNoeud) {
      return this.visitMultiplication(node)
    } else if (node instanceof NumberNode) {
      return this.visitNumber(node)
    } else if (node instanceof SiNode) {
      return this.visitSi(node)
    } else if (node instanceof SoustractionNode) {
      return this.visitSoustraction(node)
    } else if (node instanceof SuperieurNode) {
      return this.visitSuperieur(node)
    } else if (node instanceof AssignationNoeud) {
      return this.visitAssignation(node)
    } else {
      throw new Error('Expression inconnue')
    }
  }
  abstract visitLitteral(node: LitteralNoeud): LitteralNoeud
  abstract visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud
  abstract visitNumber(node: NumberNode): NumberNode
  abstract visitSi(node: SiNode): SiNode
  abstract visitSoustraction(node: SoustractionNode): SoustractionNode
  abstract visitSuperieur(node: SuperieurNode): SuperieurNode
}
