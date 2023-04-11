import AdditionNoeud from '../AdditionNoeud.model'
import AssignationNoeud from '../AssignationNoeud.model'
import ConditionNode from '../ConditionNode.model'
import ExpressionNoeud from '../ExpressionNoeud.model'
import ExpressionsNoeud from '../ExpressionsNoeud.model'
import FonctionNoeud from '../FonctionNoeud.model'
import LitteralNoeud from '../LitteralNoeud.model'
import MultiplicationNoeud from '../MultiplicationNoeud.model'
import NoeudModel from '../Noeud.model'
import NombreNoeud from '../NombreNoeud.model'
import SiNoeud from '../SiNoeud.model'
import SoustractionNoeud from '../SoustractionNoeud.model'
import SuperieurNoeud from '../SuperieurNoeud.model'

export default interface VisiteurNoeud<T> {
  visit(node: NoeudModel): T
  visitFonction(node: FonctionNoeud): T
  visitExpressions(node: ExpressionsNoeud): T
  visitAddition(node: AdditionNoeud): T
  visitNumber(node: NombreNoeud): T
  visitCondition(node: ConditionNode): T
  visit(node: ExpressionNoeud): T
  visitLitteral(node: LitteralNoeud): T
  visitMultiplication(node: MultiplicationNoeud): T
  visitSi(node: SiNoeud): T
  visitSoustraction(node: SoustractionNoeud): T
  visitSuperieur(node: SuperieurNoeud): T
  visitString(node: string): T
  visitNumberValue(node: number): T
  visitAssignation(node: AssignationNoeud): T
}
