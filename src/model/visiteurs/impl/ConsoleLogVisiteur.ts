import { consolelogDecorator } from '../../../decorators/consolelogDecorator'
import AdditionNoeud from '../../AdditionNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNoeud from '../../ExpressionNoeud.model'
import LitteralNoeud from '../../LitteralNoeud.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import NombreNoeud from '../../NombreNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNoeud from '../../SuperieurNoeud.model'
import VisiteurNoeud from '../VisiteurNoeud'
import { applyMethodDecoratorToAllMethods } from '../../../decorators/applyMethodDecoratorToAllMethods'
import AbstractVisiteur from './AbstractVisiteur'
import AssignationNoeud from '../../AssignationNoeud.model'
import ExpressionsNoeud from '../../ExpressionsNoeud.model'
import FonctionNoeud from '../../FonctionNoeud.model'
import NoeudModel from '../../Noeud.model'

@applyMethodDecoratorToAllMethods(consolelogDecorator)
export default class ConsoleLogVisiteur implements VisiteurNoeud<void> {
  visit(node: NoeudModel): void
  visit(node: ExpressionNoeud): void
  visit(node: unknown): void {
    throw new Error('Method not implemented.')
  }
  visitFonction(node: FonctionNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitExpressions(node: ExpressionsNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitAssignation(node: AssignationNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitNumberValue(node: number): string {
    throw new Error('Method not implemented.')
  }
  visitAddition(node: AdditionNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitCondition(node: ConditionNode): string {
    throw new Error('Method not implemented.')
  }
  visitLitteral(node: LitteralNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitMultiplication(node: MultiplicationNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitNumber(node: NombreNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitSi(node: SiNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitSoustraction(node: SoustractionNoeud): string {
    throw new Error('Method not implemented.')
  }
  visitSuperieur(node: SuperieurNoeud): string {
    throw new Error('Method not implemented.')
  }

  visitString(node: string): void {
    console.log(node)
  }
}
