import AdditionNode from '../../AdditionNode.model'
import ConditionNode from '../../ConditionNode.model'
import LitteralNode from '../../LitteralNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import AbstractVisiteur from './AbstractVisiteur'
import CodeGenerator from './CodeGenerator'

export default class CobolGenerator
  extends AbstractVisiteur
  implements CodeGenerator
{
  visitNumberValue(node: number): number {
    throw new Error('Method not implemented.')
  }
  visitString(node: string): string {
    throw new Error('Method not implemented.')
  }
  visitAddition(node: AdditionNode): AdditionNode {
    throw new Error('Method not implemented.')
  }
  visitCondition(node: ConditionNode): ConditionNode {
    throw new Error('Method not implemented.')
  }
  visitLitteral(node: LitteralNode): LitteralNode {
    throw new Error('Method not implemented.')
  }
  visitMultiplication(node: MultiplicationNode): MultiplicationNode {
    throw new Error('Method not implemented.')
  }
  visitNumber(node: NumberNode): NumberNode {
    throw new Error('Method not implemented.')
  }
  visitSi(node: SiNode): SiNode {
    throw new Error('Method not implemented.')
  }
  visitSoustraction(node: SoustractionNode): SoustractionNode {
    throw new Error('Method not implemented.')
  }
  visitSuperieur(node: SuperieurNode): SuperieurNode {
    throw new Error('Method not implemented.')
  }
  print(): string {
    throw new Error('Not implemented')
  }
}
