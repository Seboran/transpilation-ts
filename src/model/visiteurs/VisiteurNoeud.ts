import AdditionNoeud from '../AdditionNoeud.model'
import AssignationNoeud from '../AssignationNoeud.model'
import ConditionNode from '../ConditionNode.model'
import ExpressionNoeud from '../ExpressionNoeud.model'
import LitteralNoeud from '../LitteralNoeud.model'
import MultiplicationNoeud from '../MultiplicationNoeud.model'
import NumberNoeud from '../NumberNoeud.model'
import SiNode from '../SiNode.model'
import SoustractionNode from '../SoustractionNode.model'
import SuperieurNode from '../SuperieurNode.model'

export default interface VisiteurNoeud {
  visitAddition(node: AdditionNoeud): AdditionNoeud
  visitNumber(node: NumberNoeud): NumberNoeud
  visitCondition(node: ConditionNode): ConditionNode
  visitExpression(node: ExpressionNoeud): ExpressionNoeud
  visitLitteral(node: LitteralNoeud): LitteralNoeud
  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud
  visitSi(node: SiNode): SiNode
  visitSoustraction(node: SoustractionNode): SoustractionNode
  visitSuperieur(node: SuperieurNode): SuperieurNode
  visitString(node: string): string
  visitNumberValue(node: number): number
  visitAssignation(node: AssignationNoeud): AssignationNoeud
}
