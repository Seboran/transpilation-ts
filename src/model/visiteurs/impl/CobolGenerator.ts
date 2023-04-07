import AdditionNode from '../../AdditionNode.model'
import ConditionNode from '../../ConditionNode.model'
import LitteralNode from '../../LitteralNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import AbstractGenerator from './AbstractGenerator'
import AbstractVisiteur from './AbstractVisiteur'
import CodeGenerator from './CodeGenerator'

export default class CobolGenerator
  extends AbstractGenerator
  implements CodeGenerator
{
  visitAddition(node: AdditionNode): AdditionNode {
    this.code += 'ADD '
    this.visitExpression(node.a)
    this.code += ' '
    this.visitExpression(node.b)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    this.visitExpression(node.value)
    return node
  }

  visitMultiplication(node: MultiplicationNode): MultiplicationNode {
    this.code += 'MULTIPLY '
    this.visitExpression(node.a)
    this.code += ' BY '
    this.visitExpression(node.b)
    return node
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
    return this.code
  }
}
