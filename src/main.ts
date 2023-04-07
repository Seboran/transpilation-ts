/**
 * On veut représenter avec des nodes l'instruction suivante en pseudo code :
 *
 * si X > Y:
 *   2 + (5 * 3)
 * sinon:
 *   2 + (5 - 3)
 */
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

const container = new Container()

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

console.log(instructions)

const consoleLogVisiteur = new ConsoleLogVisiteur()

instructions.accept(consoleLogVisiteur)
