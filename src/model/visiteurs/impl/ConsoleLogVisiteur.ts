import { consolelogDecorator } from '../../../decorators/consolelogDecorator'
import AdditionNoeud from '../../AdditionNoeud.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNoeud from '../../ExpressionNoeud.model'
import LitteralNoeud from '../../LitteralNoeud.model'
import MultiplicationNoeud from '../../MultiplicationNoeud.model'
import NombreNoeud from '../../NombreNoeud.model'
import SiNoeud from '../../SiNoeud.model'
import SoustractionNoeud from '../../SoustractionNoeud.model'
import SuperieurNoeud from '../../SuperieurNoeud.model'
import VisiteurNoeud from '../VisiteurNoeud'
import { applyMethodDecoratorToAllMethods } from '../../../decorators/applyMethodDecoratorToAllMethods'
import AbstractVisiteur from './AbstractVisiteur'
import AssignationNoeud from '../../AssignationNoeud.model'
import ExpressionsNoeud from '../../ExpressionsNoeud.model'
import FonctionNoeud from '../../FonctionNoeud.model'

@applyMethodDecoratorToAllMethods(consolelogDecorator)
export default class ConsoleLogVisiteur
  extends AbstractVisiteur
  implements VisiteurNoeud
{
  visitFonction(node: FonctionNoeud): FonctionNoeud {
    throw new Error('Method not implemented.')
  }
  visitExpressions(node: ExpressionsNoeud): ExpressionsNoeud {
    throw new Error('Method not implemented.')
  }
  visitAssignation(node: AssignationNoeud): AssignationNoeud {
    throw new Error('Method not implemented.')
  }
  visitNumberValue(node: number): number {
    throw new Error('Method not implemented.')
  }
  visitAddition(node: AdditionNoeud): AdditionNoeud {
    console.log(node)
    return node
  }
  visitNumber(node: NombreNoeud): NombreNoeud {
    console.log(node)
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    console.log(node)
    return node
  }
  visitExpression(node: ExpressionNoeud): ExpressionNoeud {
    return super.visitExpression(node)
  }
  visitLitteral(node: LitteralNoeud): LitteralNoeud {
    console.log(node)
    return node
  }
  visitMultiplication(node: MultiplicationNoeud): MultiplicationNoeud {
    console.log(node)
    return node
  }
  visitSi(node: SiNoeud): SiNoeud {
    console.log(node)
    return node
  }
  visitSoustraction(node: SoustractionNoeud): SoustractionNoeud {
    console.log(node)
    return node
  }
  visitSuperieur(node: SuperieurNoeud): SuperieurNoeud {
    console.log(node)
    return node
  }
  visitString(node: string): string {
    console.log(node)
    return node
  }
}
