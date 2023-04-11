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
import NoeudModel from '../../Noeud.model'

@applyMethodDecoratorToAllMethods(consolelogDecorator)
export default class ConsoleLogVisiteur
  implements VisiteurNoeud<void, NoeudModel>
{
  visit(node: NoeudModel): void {
    console.log(node)
  }
}
