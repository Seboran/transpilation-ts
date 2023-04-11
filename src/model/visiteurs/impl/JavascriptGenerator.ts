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
  visitExpressions(node: ExpressionsNoeud): string {
    return node.expressions.map(this.visit.bind(this)).join('; ') + ';'
  }
  visitFonction(node: FonctionNoeud): string {
    return (
      this.visitLitteral(node.nom) +
      '(' +
      node.args.map(this.visit.bind(this)).join(',') +
      ')'
    )
  }
  visitAssignation(node: AssignationNoeud): string {
    const prefix = this.getPrefix(node.final)
    return (
      prefix +
      ' ' +
      this.visitLitteral(node.variable) +
      ' = ' +
      this.visit(node.expression)
    )
  }
  getPrefix(final: 'final' | 'default') {
    if (final == 'final') {
      return 'const'
    }
    return 'var'
  }
  visitAddition(node: AdditionNoeud): string {
    return this.visit(node.a) + ' + ' + this.visit(node.b)
  }
  visitCondition(node: ConditionNode): string {
    return this.visit(node.value)
  }

  visitMultiplication(node: MultiplicationNoeud): string {
    return this.visit(node.a) + ' * ' + this.visit(node.b)
  }

  visitSi(node: SiNoeud): string {
    return (
      'if (' +
      this.visitCondition(node.condition) +
      ') { ' +
      this.visit(node.conditionVraieExpression) +
      ' } else { ' +
      this.visit(node.conditionFausseExpression) +
      ' }'
    )
  }
  visitSoustraction(node: SoustractionNoeud): string {
    return this.visit(node.a) + ' - ' + this.visit(node.b)
  }
  visitSuperieur(node: SuperieurNoeud): string {
    return this.visit(node.a) + ' > ' + this.visit(node.b)
  }

  print(): string {
    return this.code
  }
}
