import AdditionNoeud from '../../../../model/AdditionNoeud.model'
import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import ConditionNode from '../../../../model/ConditionNode.model'
import ExpressionsNoeud from '../../../../model/ExpressionsNoeud.model'
import FonctionNoeud from '../../../../model/FonctionNoeud.model'
import MultiplicationNoeud from '../../../../model/MultiplicationNoeud.model'
import SiNoeud from '../../../../model/SiNoeud.model'
import SoustractionNoeud from '../../../../model/SoustractionNoeud.model'
import SuperieurNoeud from '../../../../model/SuperieurNoeud.model'
import JavascriptOrchestrateur from '../../orchestrateur/js/JavascriptOrchestrateur'
import AbstractGenerateur from '../AbstractGenerateur'
import CodeGenerator from '../CodeGenerator'

export default class JavascriptGenerator
  extends AbstractGenerateur
  implements CodeGenerator
{
  constructor() {
    const orchestrateur = new JavascriptOrchestrateur()
    super(orchestrateur.orchestrateur)
  }
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
