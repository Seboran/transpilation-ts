import AdditionNode from '../AdditionNode.model'
import AssignationNode from '../AssignationNode.model'
import ConditionNode from '../ConditionNode.model'
import ExpressionNode from '../ExpressionNode.model'
import LitteralNode from '../LitteralNode.model'
import MultiplicationNode from '../MultiplicationNode.model'
import NumberNode from '../NumberNode.model'
import SiNode from '../SiNode.model'
import SoustractionNode from '../SoustractionNode.model'
import SuperieurNode from '../SuperieurNode.model'

export default interface VisiteurNode {
  visitAddition(node: AdditionNode): AdditionNode
  visitNumber(node: NumberNode): NumberNode
  visitCondition(node: ConditionNode): ConditionNode
  visitExpression(node: ExpressionNode): ExpressionNode
  visitLitteral(node: LitteralNode): LitteralNode
  visitMultiplication(node: MultiplicationNode): MultiplicationNode
  visitSi(node: SiNode): SiNode
  visitSoustraction(node: SoustractionNode): SoustractionNode
  visitSuperieur(node: SuperieurNode): SuperieurNode
  visitString(node: string): string
  visitNumberValue(node: number): number
  visitAssignation(node: AssignationNode): AssignationNode
}
