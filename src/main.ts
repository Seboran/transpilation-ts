import AdditionNoeud from './model/AdditionNoeud.model'
import AssignationNoeud from './model/AssignationNoeud.model'
import ConditionNode from './model/ConditionNode.model'
import LitteralNoeud from './model/LitteralNoeud.model'
import MultiplicationNoeud from './model/MultiplicationNoeud.model'
import NoeudModel from './model/Noeud.model'
import NumberNoeud from './model/NumberNoeud.model'
import SiNoeud from './model/SiNoeud.model'
import SoustractionNoeud from './model/SoustractionNoeud.model'
import SuperieurNoeud from './model/SuperieurNoeud.model'

import JavascriptGenerator from './model/visiteurs/impl/JavascriptGenerator'

/**
 * On veut représenter avec des nodes l'instruction suivante en pseudo code :
 *
 * si X > Y:
 *   2 + (5 * 3)
 * sinon:
 *   2 + (5 - 3)
 */

const instructions: NoeudModel = new SiNoeud(
  new ConditionNode(
    new SuperieurNoeud(new LitteralNoeud('X'), new LitteralNoeud('Y'))
  ),
  new AssignationNoeud(
    new LitteralNoeud('Z'),
    new AdditionNoeud(
      new NumberNoeud(2),
      new MultiplicationNoeud(new NumberNoeud(5), new NumberNoeud(3))
    )
  ),
  new AdditionNoeud(
    new NumberNoeud(2),
    new SoustractionNoeud(new NumberNoeud(5), new NumberNoeud(3))
  )
)

const javascriptGenerator = new JavascriptGenerator()
instructions.accept(javascriptGenerator)
console.log(javascriptGenerator.print())

// const cobolGenerator = new CobolGenerator()
// instructions.accept(cobolGenerator)
// console.log(cobolGenerator.print())

// /**
//  * Nouvel exemple avec une assignation
//  *
//  * x := 2 + 2
//  */

// const assignation: NodeModel = new AssignationNode(
//   new LitteralNode('x'),
//   new AdditionNode(new NumberNode(2), new NumberNode(2))
// )

// const javascriptGenerator2 = new JavascriptGenerator()
// assignation.accept(javascriptGenerator2)
// console.log('Assignation', javascriptGenerator2.print())

// const consoleLogVisiteur = new ConsoleLogVisiteur()
// consoleLogVisiteur.visitSoustraction(
//   new SoustractionNode(new NumberNode(2), new NumberNode(2))
// )
