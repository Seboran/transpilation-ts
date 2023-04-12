import { describe, expect, test } from 'vitest'
import NombreNoeud from '../../../../../../model/NombreNoeud.model'
import MermaidNombreVisiteur from '../MermaidNombreVisiteur'

describe('Mermaid Nombre Visiteur', () => {
  test('Affiche le nom du litteral', () => {
    const nombreNoeud = new NombreNoeud(2)
    const mermaidVisiteur = new MermaidNombreVisiteur({})
    const markdown = mermaidVisiteur.visit(nombreNoeud)
    expect(markdown).toEqual('2')
  })
})
