import { consolelogDecorator } from '../../../decorators/consolelogDecorator'
import AdditionNoeud from '../../AdditionNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNoeud from '../../ExpressionNoeud.model'
import LitteralNoeud from '../../LitteralNoeud.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import NumberNoeud from '../../NumberNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNode from '../../SuperieurNode.model'
import VisiteurNoeud from '../VisiteurNoeud'
import { applyMethodDecoratorToAllMethods } from '../../../decorators/applyMethodDecoratorToAllMethods'
import AbstractVisiteur from './AbstractVisiteur'
import AssignationNoeud from '../../AssignationNoeud.model'

@applyMethodDecoratorToAllMethods(consolelogDecorator)
export default class ConsoleLogVisiteur
  extends AbstractVisiteur
  implements VisiteurNoeud
{
  visitAssignation(node: AssignationNoeud): AssignationNoeud {
    throw new Error('Method not implemented.')
  }
  visitNumberValue(node: number): number {
    throw new Error('Method not implemented.')
  }
  visitAddition(node: AdditionNoeud): AdditionNoeud {
    console.log(node)
    return node
  }
  visitNumber(node: NumberNoeud): NumberNoeud {
    console.log(node)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    console.log(node)
    return node
  }
  visitExpression(node: ExpressionNoeud): ExpressionNoeud {
    return super.visitExpression(node)
  }
  visitLitteral(node: LitteralNoeud): LitteralNoeud {
    console.log(node)
    return node
  }
  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud {
    console.log(node)
    return node
  }
  visitSi(node: SiNoeud): SiNoeud {
    console.log(node)
    return node
  }
  visitSoustraction(node: SoustractionNoeud): SoustractionNoeud {
    console.log(node)
    return node
  }
  visitSuperieur(node: SuperieurNode): SuperieurNode {
    console.log(node)
    return node
  }
  visitString(node: string): string {
    console.log(node)
    return node
  }
}
