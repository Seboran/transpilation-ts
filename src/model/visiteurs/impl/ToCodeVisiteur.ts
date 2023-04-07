import { consolelogDecorator } from '../../../decorators/consolelogDecorator'
import AdditionNode from '../../AdditionNode.model'
import ConditionNode from '../../ConditionNode.model'
import LitteralNode from '../../LitteralNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import AbastractVisiteur from './AbstractVisiteur'

export default class ToCodeVisiteur extends AbastractVisiteur {
  private code = ''
  visitNumberValue(node: number): number {
    this.code += '' + node
    return node
  }
  visitString(node: string): string {
    this.code += '' + node
    return node
  }
  visitAddition(node: AdditionNode): AdditionNode {
    this.visitExpression(node.a)
    this.code += ' + '
    this.visitExpression(node.b)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    this.visitExpression(node.value)
    return node
  }
  visitLitteral(node: LitteralNode): LitteralNode {
    this.visitString(node.name)
    return node
  }
  visitMultiplication(node: MultiplicationNode): MultiplicationNode {
    this.visitExpression(node.a)
    this.code += ' * '
    this.visitExpression(node.b)
    return node
  }
  visitNumber(node: NumberNode): NumberNode {
    this.visitNumberValue(node.value)
    return node
  }
  visitSi(node: SiNode): SiNode {
    this.code += 'if ('
    this.visitCondition(node.condition)

    this.code += ') { '

    this.visitExpression(node.conditionVraieExpression)
    this.code += ' } else { '
    this.visitExpression(node.conditionFausseExpression)
    this.code += ' }'
    return node
  }
  visitSoustraction(node: SoustractionNode): SoustractionNode {
    this.visitExpression(node.a)
    this.code += ' - '
    this.visitExpression(node.b)
    return node
  }
  visitSuperieur(node: SuperieurNode): SuperieurNode {
    this.visitExpression(node.a)
    this.code += ' > '
    this.visitExpression(node.b)
    return node
  }

  print(): string {
    return 'Code source js : ' + this.code
  }
}
