import { consolelogDecorator } from '../../../decorators/consolelogDecorator'
import AdditionNoeud from '../../AdditionNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNode from '../../ExpressionNode.model'
import LitteralNode from '../../LitteralNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import VisiteurNode from '../VisiteurNode'
import { applyMethodDecoratorToAllMethods } from '../../../decorators/applyMethodDecoratorToAllMethods'
import AbstractVisiteur from './AbstractVisiteur'
import AssignationNode from '../../AssignationNode.model'

@applyMethodDecoratorToAllMethods(consolelogDecorator)
export default class ConsoleLogVisiteur
  extends AbstractVisiteur
  implements VisiteurNode
{
  visitAssignation(node: AssignationNode): AssignationNode {
    throw new Error('Method not implemented.')
  }
  visitNumberValue(node: number): number {
    throw new Error('Method not implemented.')
  }
  visitAddition(node: AdditionNoeud): AdditionNoeud {
    console.log(node)
    return node
  }
  visitNumber(node: NumberNode): NumberNode {
    console.log(node)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    console.log(node)
    return node
  }
  visitExpression(node: ExpressionNode): ExpressionNode {
    return super.visitExpression(node)
  }
  visitLitteral(node: LitteralNode): LitteralNode {
    console.log(node)
    return node
  }
  visitMultiplication(node: MultiplicationNode): MultiplicationNode {
    console.log(node)
    return node
  }
  visitSi(node: SiNode): SiNode {
    console.log(node)
    return node
  }
  visitSoustraction(node: SoustractionNode): SoustractionNode {
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
