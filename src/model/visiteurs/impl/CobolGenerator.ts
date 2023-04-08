import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNode from '../../AssignationNode.model'
import ConditionNode from '../../ConditionNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import AbstractGenerator from './AbstractGenerator'
import CodeGenerator from './CodeGenerator'

export default class CobolGenerator
  extends AbstractGenerator
  implements CodeGenerator
{
  visitAssignation(node: AssignationNode): AssignationNode {
    throw new Error('Method not implemented.')
  }
  visitAddition(node: AdditionNoeud): AdditionNoeud {
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
    this.code += 'IF '
    this.visitCondition(node.condition)
    this.code += '\n  '
    this.visitExpression(node.conditionVraieExpression)
    this.code += '\nELSE\n  '
    this.visitExpression(node.conditionFausseExpression)
    this.code += '\nEND-IF'
    return node
  }
  visitSoustraction(node: SoustractionNode): SoustractionNode {
    this.code += 'SUBTRACT '
    this.visitExpression(node.a)
    this.code += ' FROM '
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
    return this.code
  }
}
