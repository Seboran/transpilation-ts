import LitteralNoeud from '../../LitteralNoeud.model'
import NumberNode from '../../NumberNode.model'
import AbstractVisiteur from './AbstractVisiteur'
import CodeGenerator from './CodeGenerator'

export default abstract class AbstractGenerator
  extends AbstractVisiteur
  implements CodeGenerator
{
  protected code = ''
  abstract print(): string
  visitNumberValue(node: number): number {
    this.code += '' + node
    return node
  }
  visitString(node: string): string {
    this.code += '' + node
    return node
  }
  visitLitteral(node: LitteralNoeud): LitteralNoeud {
    this.visitString(node.name)
    return node
  }
  visitNumber(node: NumberNode): NumberNode {
    this.visitNumberValue(node.value)
    return node
  }
}
