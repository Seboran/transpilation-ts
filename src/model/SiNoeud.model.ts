import ConditionNode from './ConditionNode.model'
import NoeudModel from './Noeud.model'

export default class SiNoeud extends NoeudModel {
  constructor(
    public condition: ConditionNode,
    public conditionVraieExpression: NoeudModel,
    public conditionFausseExpression: NoeudModel
  ) {
    super()
  }
}
