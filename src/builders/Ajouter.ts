import AdditionNoeud from '../model/AdditionNoeud.model'
import ExpressionNoeud from '../model/ExpressionNoeud.model'
import NombreNoeud from '../model/NombreNoeud.model'

export default class Ajouter {
  private a!: ExpressionNoeud
  private b!: ExpressionNoeud
  private otherValues: ExpressionNoeud[] = []
  constructor() {}

  static Addendum = class Ajouter {}

  Nombre(nombre: number): this {
    const value = new NombreNoeud(nombre)
    if (!this.a) {
      this.a = value
    } else if (!this.b) {
      this.b = value
    } else {
      this.otherValues.push(value)
    }
    return this
  }

  A = new Ajouter.Addendum()

  build(): AdditionNoeud {
    if (!this.a) {
      throw "Le premier membre n'est pas attribué"
    }
    if (!this.b) {
      throw "Le deuxième membre n'est pas attribué"
    }
    return new AdditionNoeud(this.a, this.b)
  }
}
