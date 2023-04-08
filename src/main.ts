import AdditionNoeud from './model/AdditionNoeud.model'
import AssignationNoeud from './model/AssignationNoeud.model'
import ConditionNode from './model/ConditionNode.model'
import LitteralNode from './model/LitteralNode.model'
import MultiplicationNode from './model/MultiplicationNode.model'
import NoeudModel from './model/Noeud.model'
import NumberNode from './model/NumberNode.model'
import SiNode from './model/SiNode.model'
import SoustractionNode from './model/SoustractionNode.model'
import SuperieurNode from './model/SuperieurNode.model'

import JavascriptGenerator from './model/visiteurs/impl/JavascriptGenerator'

/**
 * On veut représenter avec des nodes l'instruction suivante en pseudo code :
 *
 * si X > Y:
 *   2 + (5 * 3)
 * sinon:
 *   2 + (5 - 3)
 */

const instructions: NoeudModel = new SiNode(
  new ConditionNode(
    new SuperieurNode(new LitteralNode('X'), new LitteralNode('Y'))
  ),
  new AssignationNoeud(
    new LitteralNode('Z'),
    new AdditionNoeud(
      new NumberNode(2),
      new MultiplicationNode(new NumberNode(5), new NumberNode(3))
    )
  ),
  new AdditionNoeud(
    new NumberNode(2),
    new SoustractionNode(new NumberNode(5), new NumberNode(3))
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
