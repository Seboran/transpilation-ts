import { describe, expect, test } from 'vitest'

import Ajouter from '../Ajouter'
import AdditionNoeud from '../../model/AdditionNoeud.model'
import NombreNoeud from '../../model/NombreNoeud.model'
import LitteralNoeud from '../../model/LitteralNoeud.model'
import FonctionNoeud from '../../model/FonctionNoeud.model'

describe('Ajouter builder', () => {
  test('Ajouter 2 à 2', () => {
    const deuxPlusDeux = new Ajouter().Nombre(2).Nombre(2).build()
    expect(deuxPlusDeux).toEqual(
      new AdditionNoeud(new NombreNoeud(2), new NombreNoeud(2))
    )
  })
  test('Ajouter 2 à 3', () => {
    const deuxPlusTrois = new Ajouter().Nombre(2).Nombre(3).build()
    expect(deuxPlusTrois).toEqual(
      new AdditionNoeud(new NombreNoeud(2), new NombreNoeud(3))
    )
  })
  test('Ajouter 2 à 3 à 4', () => {
    const deuxPlusTrois = new Ajouter().Nombre(2).Nombre(3).Nombre(4).build()
    expect(deuxPlusTrois).toEqual(
      new AdditionNoeud(
        new NombreNoeud(2),
        new AdditionNoeud(new NombreNoeud(3), new NombreNoeud(4))
      )
    )
  })
  test('Ajouter 2 à X', () => {
    const deuxPlusTrois = new Ajouter().Nombre(2).Litteral('X').build()
    expect(deuxPlusTrois).toEqual(
      new AdditionNoeud(new NombreNoeud(2), new LitteralNoeud('X'))
    )
  })
  test('Ajouter 2 à mafonction()', () => {
    const deuxPlusTrois = new Ajouter().Nombre(2).Fonction('mafonction').build()
    expect(deuxPlusTrois).toEqual(
      new AdditionNoeud(
        new NombreNoeud(2),
        new FonctionNoeud(new LitteralNoeud('X'))
      )
    )
  })
})
