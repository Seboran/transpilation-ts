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
import NodeVisiteur from './model/visiteurs/impl/NodeVisiteur'
import VisiteurNode from './model/visiteurs/VisiteurNode'

import { Container } from 'inversify'
import AdditionVisiteur from './model/visiteurs/impl/AdditionVisiteur'
import ExpressionVisiteur from './model/visiteurs/impl/ExpressionVisiteur'
import LitteralVisiteur from './model/visiteurs/impl/LitteralVisiteur'
import NumberVisiteur from './model/visiteurs/impl/NumberVisiteur'
import { IAdditionVisiteur } from './model/visiteurs/IAdditionVisiteur'
import { IExpressionVisiteur } from './model/visiteurs/IExpressionVisiteur'

const container = new Container()
container.bind<IExpressionVisiteur>(ExpressionVisiteur).toSelf()
container.bind<IAdditionVisiteur>(AdditionVisiteur).toSelf()
container.bind<LitteralVisiteur>(LitteralVisiteur).toSelf()
container.bind<NodeVisiteur>(NodeVisiteur).toSelf()
container.bind<NumberVisiteur>(NumberVisiteur).toSelf()

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
instructions.accept(container.get<NodeVisiteur>(NodeVisiteur))
