import AdditionNode from '../../AdditionNode.model'
import AssignationNode from '../../AssignationNode.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNode from '../../ExpressionNode.model'
import LitteralNode from '../../LitteralNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import VisiteurNode from '../VisiteurNode'

export default abstract class AbstractVisiteur implements VisiteurNode {
  abstract visitAssignation(node: AssignationNode): AssignationNode
  abstract visitNumberValue(node: number): number
  abstract visitString(node: string): string
  abstract visitAddition(node: AdditionNode): AdditionNode
  abstract visitCondition(node: ConditionNode): ConditionNode
  visitExpression(node: ExpressionNode): ExpressionNode {
    if (node instanceof AdditionNode) {
      return this.visitAddition(node)
    } else if (node instanceof ConditionNode) {
      return this.visitCondition(node)
    } else if (node instanceof LitteralNode) {
      return this.visitLitteral(node)
    } else if (node instanceof MultiplicationNode) {
      return this.visitMultiplication(node)
    } else if (node instanceof NumberNode) {
      return this.visitNumber(node)
    } else if (node instanceof SiNode) {
      return this.visitSi(node)
    } else if (node instanceof SoustractionNode) {
      return this.visitSoustraction(node)
    } else if (node instanceof SuperieurNode) {
      return this.visitSuperieur(node)
    } else if (node instanceof AssignationNode) {
      return this.visitAssignation(node)
    } else {
      throw new Error('Expression inconnue')
    }
  }
  abstract visitLitteral(node: LitteralNode): LitteralNode
  abstract visitMultiplication(node: MultiplicationNode): MultiplicationNode
  abstract visitNumber(node: NumberNode): NumberNode
  abstract visitSi(node: SiNode): SiNode
  abstract visitSoustraction(node: SoustractionNode): SoustractionNode
  abstract visitSuperieur(node: SuperieurNode): SuperieurNode
}
