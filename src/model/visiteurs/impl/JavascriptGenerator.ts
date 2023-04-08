import AdditionNoeud from '../../AdditionNoeud.model'
import AssignationNoeud from '../../AssignationNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNoeud from '../../ExpressionNoeud.model'
import ExpressionsNoeud from '../../ExpressionsNoeud.model'
import FonctionNoeud from '../../FonctionNoeud.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNoeud from '../../SuperieurNoeud.model'
import AbstractGenerateur from './AbstractGenerateur'
import CodeGenerator from './CodeGenerator'

export default class JavascriptGenerator
  extends AbstractGenerateur
  implements CodeGenerator
{
  visitFonction(node: FonctionNoeud): FonctionNoeud {
    this.visitLitteral(node.nom)
    this.code += '('
    node.args.forEach(this.visitArgument.bind(this))
    this.code += ')'
    return node
  }
  visitArgument(
    node: ExpressionNoeud,
    index: number,
    array: ExpressionNoeud[]
  ) {
    this.visitExpression(node)
    if (index + 1 != array.length) {
      this.code += ','
    }
  }
  visitExpressions(node: ExpressionsNoeud): ExpressionsNoeud {
    node.expressions.forEach(this.visitExpressionLocal.bind(this))
    return node
  }
  visitExpressionLocal(
    node: ExpressionNoeud,
    index: number,
    array: ExpressionNoeud[]
  ): void {
    this.visitExpression(node)
    this.code += ';'
    if (index + 1 != array.length) {
      this.code += ' '
    }
  }
  visitAssignation(node: AssignationNoeud): AssignationNoeud {
    const prefix = this.getPrefix(node.final)
    this.code += prefix + ' '
    this.visitLitteral(node.variable)
    this.code += ' = '
    this.visitExpression(node.expression)
    return node
  }
  getPrefix(final: 'final' | 'default') {
    if (final == 'final') {
      return 'const'
    }
    return 'var'
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

  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud {
    this.visitExpression(node.a)
    this.code += ' * '
    this.visitExpression(node.b)
    return node
  }

  visitSi(node: SiNoeud): SiNoeud {
    this.code += 'if ('
    this.visitCondition(node.condition)

    this.code += ') { '

    this.visitExpression(node.conditionVraieExpression)
    this.code += ' } else { '
    this.visitExpression(node.conditionFausseExpression)
    this.code += ' }'
    return node
  }
  visitSoustraction(node: SoustractionNoeud): SoustractionNoeud {
    this.visitExpression(node.a)
    this.code += ' - '
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
