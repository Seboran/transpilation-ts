import AdditionNoeud from '../../../../../model/AdditionNoeud.model'
import type AssignationNoeud from '../../../../../model/AssignationNoeud.model'
import MultiplicationNoeud from '../../../../../model/MultiplicationNoeud.model'
import SoustractionNoeud from '../../../../../model/SoustractionNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class CobolAssignationVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, AssignationNoeud>
{
  visit(node: AssignationNoeud): string {
    const expression = node.expression
    if (expression instanceof AdditionNoeud) {
      return this.addition(node, expression)
    } else if (expression instanceof MultiplicationNoeud) {
      return this.multiplication(node, expression)
    } else if (expression instanceof SoustractionNoeud) {
      return this.soustraction(node, expression)
    } else {
      return this.assignationDefaut(node)
    }
  }
  addition(node: AssignationNoeud, addition: AdditionNoeud): string {
    return `ADD ${super.visit(addition.a)} ${super.visit(addition.b)} GIVING ${node.variable.name}`
  }
  multiplication(node: AssignationNoeud, multiplication: MultiplicationNoeud): string {
    return `MULTIPLY ${super.visit(multiplication.a)} BY ${super.visit(
      multiplication.b,
    )} GIVING ${node.variable.name}`
  }
  soustraction(node: AssignationNoeud, soustraction: SoustractionNoeud): string {
    return `SUBTRACT ${super.visit(soustraction.b)} FROM ${super.visit(
      soustraction.a,
    )} GIVING ${node.variable.name}`
  }
  assignationDefaut(node: AssignationNoeud): string {
    return `SET ${node.variable} TO ${node.expression}`
  }
}
