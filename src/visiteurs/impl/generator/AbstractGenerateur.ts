import LitteralNoeud from '../../../model/LitteralNoeud.model'
import NombreNoeud from '../../../model/NombreNoeud.model'
import AbstractVisiteur from '../AbstractVisiteur'
import CodeGenerator from './CodeGenerator'

export default abstract class AbstractGenerateur
  extends AbstractVisiteur<string>
  implements CodeGenerator
{
  protected code = ''
  abstract print(): string
  visitNumberValue(node: number): string {
    return '' + node
  }
  visitString(node: string): string {
    return '' + node
  }
  visitLitteral(node: LitteralNoeud): string {
    return this.visitString(node.name)
  }
  visitNumber(node: NombreNoeud): string {
    return this.visitNumberValue(node.value)
  }
}
