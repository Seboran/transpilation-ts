import AdditionNoeud from '../AdditionNoeud.model'
import AssignationNoeud from '../AssignationNoeud.model'
import ConditionNode from '../ConditionNode.model'
import ExpressionNoeud from '../ExpressionNoeud.model'
import LitteralNoeud from '../LitteralNoeud.model'
import MultiplicationNode from '../MultiplicationNode.model'
import NumberNode from '../NumberNode.model'
import SiNode from '../SiNode.model'
import SoustractionNode from '../SoustractionNode.model'
import SuperieurNode from '../SuperieurNode.model'

export default interface VisiteurNoeud {
  visitAddition(node: AdditionNoeud): AdditionNoeud
  visitNumber(node: NumberNode): NumberNode
  visitCondition(node: ConditionNode): ConditionNode
  visitExpression(node: ExpressionNoeud): ExpressionNoeud
  visitLitteral(node: LitteralNoeud): LitteralNoeud
  visitMultiplication(node: MultiplicationNode): MultiplicationNode
  visitSi(node: SiNode): SiNode
  visitSoustraction(node: SoustractionNode): SoustractionNode
  visitSuperieur(node: SuperieurNode): SuperieurNode
  visitString(node: string): string
  visitNumberValue(node: number): number
  visitAssignation(node: AssignationNoeud): AssignationNoeud
}
