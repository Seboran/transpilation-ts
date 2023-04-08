import AdditionNoeud from '../AdditionNoeud.model'
import AssignationNoeud from '../AssignationNoeud.model'
import ConditionNode from '../ConditionNode.model'
import ExpressionNoeud from '../ExpressionNoeud.model'
import ExpressionsNoeud from '../ExpressionsNoeud.model'
import FonctionNoeud from '../FonctionNoeud.model'
import LitteralNoeud from '../LitteralNoeud.model'
import MultiplicationNoeud from '../MultiplicationNoeud.model'
import NombreNoeud from '../NombreNoeud.model'
import SiNoeud from '../SiNoeud.model'
import SoustractionNoeud from '../SoustractionNoeud.model'
import SuperieurNoeud from '../SuperieurNoeud.model'

export default interface VisiteurNoeud {
  visitFonction(node: FonctionNoeud): FonctionNoeud
  visitExpressions(node: ExpressionsNoeud): ExpressionsNoeud
  visitAddition(node: AdditionNoeud): AdditionNoeud
  visitNumber(node: NombreNoeud): NombreNoeud
  visitCondition(node: ConditionNode): ConditionNode
  visitExpression(node: ExpressionNoeud): ExpressionNoeud
  visitLitteral(node: LitteralNoeud): LitteralNoeud
  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud
  visitSi(node: SiNoeud): SiNoeud
  visitSoustraction(node: SoustractionNoeud): SoustractionNoeud
  visitSuperieur(node: SuperieurNoeud): SuperieurNoeud
  visitString(node: string): string
  visitNumberValue(node: number): number
  visitAssignation(node: AssignationNoeud): AssignationNoeud
}
