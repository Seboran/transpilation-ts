import { applyMethodDecoratorToAllMethods } from '../../decorators/applyMethodDecoratorToAllMethods'
import { consolelogDecorator } from '../../decorators/consolelogDecorator'
import type NoeudModel from '../../model/Noeud.model'
import type VisiteurNoeud from '../VisiteurNoeud'

@applyMethodDecoratorToAllMethods(consolelogDecorator)
export default class ConsoleLogVisiteur implements VisiteurNoeud<void, NoeudModel> {
  visit(node: NoeudModel): void {
    console.log(node)
  }
}
