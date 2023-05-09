import { beforeEach, describe, expect, test } from 'vitest'
import AdditionNoeud from '../../../../../../model/AdditionNoeud.model'
import LitteralNoeud from '../../../../../../model/LitteralNoeud.model'
import NombreNoeud from '../../../../../../model/NombreNoeud.model'
import MermaidAdditionVisiteur from '../MermaidAdditionVisiteur'
import MermaidNombreVisiteur from '../../helpers/MermaidNombreVisiteur'
import MermaidLitteralVisiteur from '../../helpers/MermaidLitteralVisiteur'
import NoeudModel from '../../../../../../model/Noeud.model'
import VisiteurNoeud from '../../../../../VisiteurNoeud'

describe('Mermaid Addition Visiteur', () => {
  beforeEach(() => {
    MermaidAdditionVisiteur.resetId()
  })
  test('Affiche 2 + X', () => {
    const additionNoeud = new AdditionNoeud(
      new NombreNoeud(2),
      new LitteralNoeud('X')
    )
    const mermaidVisiteur = new MermaidAdditionVisiteur({
      [NombreNoeud.name]: new MermaidNombreVisiteur({}),
      [LitteralNoeud.name]: new MermaidLitteralVisiteur({}),
    })
    const markdown = mermaidVisiteur.visit(additionNoeud)
    expect(markdown).toEqual('Addition1 --> 2\nAddition1 --> X\n')
  })
  test('Affiche 2 + X + Y', () => {
    const additionNoeud = new AdditionNoeud(
      new NombreNoeud(2),
      new AdditionNoeud(new LitteralNoeud('X'), new LitteralNoeud('Y'))
    )
    const orchestrateur: Record<string, VisiteurNoeud<string, NoeudModel>> = {}

    orchestrateur[NombreNoeud.name] = new MermaidNombreVisiteur(orchestrateur)
    orchestrateur[LitteralNoeud.name] = new MermaidLitteralVisiteur(
      orchestrateur
    )

    const mermaidVisiteur = new MermaidAdditionVisiteur(orchestrateur)
    orchestrateur[AdditionNoeud.name] = new MermaidAdditionVisiteur(
      orchestrateur
    )
    const markdown = mermaidVisiteur.visit(additionNoeud)
    expect(markdown).toEqual(
      `Addition1 --> 2
Addition1 --> Addition2
Addition2 --> X
Addition2 --> Y
`
    )
  })
})
