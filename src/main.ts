import 'reflect-metadata'
import AdditionNode from './model/AdditionNode.model'
import ConditionNode from './model/ConditionNode.model'
import LitteralNode from './model/LitteralNode.model'
import MultiplicationNode from './model/MultiplicationNode.model'
import NodeModel from './model/Node.model'
import NumberNode from './model/NumberNode.model'
import SiNode from './model/SiNode.model'
import SoustractionNode from './model/SoustractionNode.model'
import SuperieurNode from './model/SuperieurNode.model'

import { Container } from 'inversify'
import ConsoleLogVisiteur from './model/visiteurs/impl/ConsoleLogVisiteur'
import JavascriptGenerator from './model/visiteurs/impl/JavascriptGenerator'

const container = new Container()

/**
 * On veut représenter avec des nodes l'instruction suivante en pseudo code :
 *
 * si X > Y:
 *   2 + (5 * 3)
 * sinon:
 *   2 + (5 - 3)
 */

const instructions: NodeModel = new SiNode(
  new ConditionNode(
    new SuperieurNode(new LitteralNode('X'), new LitteralNode('Y'))
  ),
  new AdditionNode(
    new NumberNode(2),
    new MultiplicationNode(new NumberNode(5), new NumberNode(3))
  ),
  new AdditionNode(
    new NumberNode(2),
    new SoustractionNode(new NumberNode(5), new NumberNode(3))
  )
)

const javascriptGenerator = new JavascriptGenerator()
instructions.accept(javascriptGenerator)
console.log(javascriptGenerator.print())
