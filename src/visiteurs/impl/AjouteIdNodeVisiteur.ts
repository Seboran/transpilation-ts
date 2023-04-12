import NoeudModel from '../../model/Noeud.model'
import AbstractOrchestrateurImpl from './orchestrateur/AbstractOrchestrateurImpl'

export class NoeudModelWrapper<T extends NoeudModel> extends NoeudModel {
  private static id = 0
  public id: number
  private leaves: NoeudModelWrapper<NoeudModel>[] = []
  constructor(public parent: T) {
    super()
    this.id = ++NoeudModelWrapper.id
  }
  push(node: NoeudModel): number {
    this.leaves.push(new NoeudModelWrapper(node))
    return NoeudModelWrapper.id
  }
}

export default class AjouteIdNodeVisiteur extends AbstractOrchestrateurImpl<
  NoeudModelWrapper<NoeudModel>
> {}
