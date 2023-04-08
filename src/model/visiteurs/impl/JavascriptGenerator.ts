import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNode from '../../AssignationNode.model'
import ConditionNode from '../../ConditionNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import AbstractGenerator from './AbstractGenerator'
import CodeGenerator from './CodeGenerator'

export default class JavascriptGenerator
  extends AbstractGenerator
  implements CodeGenerator
{
  visitAssignation(node: AssignationNode): AssignationNode {
    this.code += 'var '
    this.visitLitteral(node.variable)
    this.code += ' = '
    this.visitExpression(node.expression)
    return node
  }
  visitAddition(node: AdditionNoeud): AdditionNoeud {
    this.visitExpression(node.a)
    this.code += ' + '
    this.visitExpression(node.b)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    this.visitExpression(node.value)
    return node
  }

  visitMultiplication(node: MultiplicationNode): MultiplicationNode {
    this.visitExpression(node.a)
    this.code += ' * '
    this.visitExpression(node.b)
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
