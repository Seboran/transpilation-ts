import AdditionNode from '../../AdditionNode.model'
import ConditionNode from '../../ConditionNode.model'
import ExpressionNode from '../../ExpressionNode.model'
import LitteralNode from '../../LitteralNode.model'
import MultiplicationNode from '../../MultiplicationNode.model'
import NumberNode from '../../NumberNode.model'
import SiNode from '../../SiNode.model'
import SoustractionNode from '../../SoustractionNode.model'
import SuperieurNode from '../../SuperieurNode.model'
import VisiteurNode from '../VisiteurNode'

export default class ConsoleLogVisiteur implements VisiteurNode {
  visitAddition(node: AdditionNode): AdditionNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitNumber(node: NumberNode): NumberNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitCondition(node: ConditionNode): ConditionNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitExpression(node: ExpressionNode): ExpressionNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitLitteral(node: LitteralNode): LitteralNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitMultiplication(node: MultiplicationNode): MultiplicationNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitSi(node: SiNode): SiNode {
    console.log(node)
    return node
  }
  visitSoustraction(node: SoustractionNode): SoustractionNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitSuperieur(node: SuperieurNode): SuperieurNode {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
  visitString(node: string): string {
    console.log('visiteur in')
    console.log(node)
    console.log('visiteur out')
    return node
  }
}
