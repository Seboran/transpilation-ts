import NoeudModel from '../../model/Noeud.model'
import AbstractVisiteur from './AbstractVisiteur'

export class NoeudModelWrapper<T extends NoeudModel> extends NoeudModel {
  private static id = 0
  public id: number
  constructor(public noeud: T) {
    super()
    this.id = ++NoeudModelWrapper.id
  }
}

export default class AjouteIdNodeVisiteur extends AbstractVisiteur<
  NoeudModelWrapper<NoeudModel>
> {}
