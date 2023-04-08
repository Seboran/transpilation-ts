import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNoeud from '../../AssignationNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNoeud from '../../SuperieurNoeud.model'
import AbstractGenerateur from './AbstractGenerateur'
import CodeGenerator from './CodeGenerator'

export default class CobolGenerator
  extends AbstractGenerateur
  implements CodeGenerator
{
  visitAssignation(node: AssignationNoeud): AssignationNoeud {
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

  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud {
    this.code += 'MULTIPLY '
    this.visitExpression(node.a)
    this.code += ' BY '
    this.visitExpression(node.b)
    return node
  }

  visitSi(node: SiNoeud): SiNoeud {
    this.code += 'IF '
    this.visitCondition(node.condition)
    this.code += '\n  '
    this.visitExpression(node.conditionVraieExpression)
    this.code += '\nELSE\n  '
    this.visitExpression(node.conditionFausseExpression)
    this.code += '\nEND-IF'
    return node
  }
  visitSoustraction(node: SoustractionNoeud): SoustractionNoeud {
    this.code += 'SUBTRACT '
    this.visitExpression(node.a)
    this.code += ' FROM '
    this.visitExpression(node.b)
    return node
  }
  visitSuperieur(node: SuperieurNoeud): SuperieurNoeud {
    this.visitExpression(node.a)
    this.code += ' > '
    this.visitExpression(node.b)
    return node
  }
  print(): string {
    return this.code
  }
}
