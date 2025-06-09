import type AssignationNoeud from '../../../../../model/AssignationNoeud.model'
import type VisiteurNoeud from '../../../../VisiteurNoeud'
import AbstractVisiteurOrchestrateur from '../../AbstractVisiteurOrchestrateur'

export default class JsAssignationVisiteur
  extends AbstractVisiteurOrchestrateur<string>
  implements VisiteurNoeud<string, AssignationNoeud>
{
  visit(node: AssignationNoeud): string {
    const prefix = this.getPrefix(node.final)
    return prefix + ' ' + super.visit(node.variable) + ' = ' + super.visit(node.expression)
  }

  private getPrefix(final: 'final' | 'default') {
    if (final == 'final') {
      return 'const'
    }
    return 'var'
  }
}
