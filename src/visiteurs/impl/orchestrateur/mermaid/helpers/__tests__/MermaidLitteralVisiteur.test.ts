import { describe, expect, test } from 'vitest'
import LitteralNoeud from '../../../../../../model/LitteralNoeud.model'
import MermaidLitteralVisiteur from '../MermaidLitteralVisiteur'

describe('Mermaid Litteral Visiteur', () => {
  test('Affiche le nom du litteral', () => {
    const litteralNoeud = new LitteralNoeud('a')
    const mermaidVisiteur = new MermaidLitteralVisiteur({})
    const markdown = mermaidVisiteur.visit(litteralNoeud)
    expect(markdown).toEqual('a')
  })
})
