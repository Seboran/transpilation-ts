import { describe, expect, test } from 'vitest'
import JavascriptGenerator from '../js/JavascriptGenerator'
import VisiteurNoeud from '../../../VisiteurNoeud'
import AdditionNoeud from '../../../../model/AdditionNoeud.model'
import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import ConditionNode from '../../../../model/ConditionNode.model'
import ExpressionNoeud from '../../../../model/ExpressionNoeud.model'
import ExpressionsNoeud from '../../../../model/ExpressionsNoeud.model'
import FonctionNoeud from '../../../../model/FonctionNoeud.model'
import LitteralNoeud from '../../../../model/LitteralNoeud.model'
import MultiplicationNoeud from '../../../../model/MultiplicationNoeud.model'
import NoeudModel from '../../../../model/Noeud.model'
import NombreNoeud from '../../../../model/NombreNoeud.model'
import SiNoeud from '../../../../model/SiNoeud.model'
import SoustractionNoeud from '../../../../model/SoustractionNoeud.model'
import SuperieurNoeud from '../../../../model/SuperieurNoeud.model'

describe('Javascript Générateur', () => {
  test('Génére le bon javascript 1', () => {
    const instructions: NoeudModel = new SiNoeud(
      new ConditionNode(
        new SuperieurNoeud(new LitteralNoeud('X'), new LitteralNoeud('Y'))
      ),
      new AssignationNoeud(
        new LitteralNoeud('Z'),
        new AdditionNoeud(
          new NombreNoeud(2),
          new MultiplicationNoeud(new NombreNoeud(5), new NombreNoeud(3))
        )
      ),
      new AdditionNoeud(
        new NombreNoeud(2),
        new SoustractionNoeud(new NombreNoeud(5), new NombreNoeud(3))
      )
    )

    const javascriptGenerator = new JavascriptGenerator()
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual(
      'if (X > Y) { var Z = 2 + 5 * 3 } else { 2 + 5 - 3 }'
    )
  })
  test('Assignation', () => {
    const javascriptGenerator = new JavascriptGenerator()

    const instructions: AssignationNoeud = new AssignationNoeud(
      new LitteralNoeud('bonjour'),
      new AdditionNoeud(new NombreNoeud(2), new LitteralNoeud('salut'))
    )

    const result = instructions.accept(javascriptGenerator)

    expect(result).toEqual('var bonjour = 2 + salut')
  })
  test('Assignation avec const', () => {
    const javascriptGenerator = new JavascriptGenerator()

    const instructions: AssignationNoeud = new AssignationNoeud(
      new LitteralNoeud('bonjour'),
      new NombreNoeud(2),
      'final'
    )

    const result = instructions.accept(javascriptGenerator)

    expect(result).toEqual('const bonjour = 2')
  })
  test('Addition', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new AdditionNoeud(
      new LitteralNoeud('2'),
      new LitteralNoeud('3')
    )
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('2 + 3')
  })
  test('Condition', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new ConditionNode(new LitteralNoeud('2'))
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('2')
  })
  test("Liste d'expressions", () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new ExpressionsNoeud(
      new LitteralNoeud('2'),
      new LitteralNoeud('3')
    )

    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('2; 3;')
  })
  test("Liste d'expressions 2", () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new ExpressionsNoeud(
      new AssignationNoeud(new LitteralNoeud('x'), new NombreNoeud(2)),
      new AssignationNoeud(new LitteralNoeud('x'), new NombreNoeud(3)),
      new AdditionNoeud(new NombreNoeud(2), new NombreNoeud(2))
    )

    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('var x = 2; var x = 3; 2 + 2;')
  })
  test("Liste d'expressions 3", () => {
    const javascriptGenerator = new JavascriptGenerator()
    const siNoeud = new SiNoeud(
      new ConditionNode(
        new SuperieurNoeud(new LitteralNoeud('X'), new LitteralNoeud('Y'))
      ),
      new AssignationNoeud(
        new LitteralNoeud('Z'),
        new AdditionNoeud(
          new NombreNoeud(2),
          new MultiplicationNoeud(new NombreNoeud(5), new NombreNoeud(3))
        )
      ),
      new AdditionNoeud(
        new NombreNoeud(2),
        new SoustractionNoeud(new NombreNoeud(5), new NombreNoeud(3))
      )
    )

    const instructions: NoeudModel = new ExpressionsNoeud(
      new FonctionNoeud(new LitteralNoeud('mafonction')),
      siNoeud,
      new ConditionNode(
        new SuperieurNoeud(new LitteralNoeud('a'), new LitteralNoeud('b'))
      )
    )
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual(
      'mafonction(); if (X > Y) { var Z = 2 + 5 * 3 } else { 2 + 5 - 3 }; a > b;'
    )
  })
  test('Fonction 1', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instruction: NoeudModel = new FonctionNoeud(
      new LitteralNoeud('mafonction'),
      new NombreNoeud(2),
      new NombreNoeud(3)
    )
    const result = instruction.accept(javascriptGenerator)
    expect(result).toEqual('mafonction(2,3)')
  })
  test('Litteral', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instruction: NoeudModel = new LitteralNoeud('mafonction')

    const result = instruction.accept(javascriptGenerator)
    expect(result).toEqual('mafonction')
  })
  test('Multiplication', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new MultiplicationNoeud(
      new LitteralNoeud('2'),
      new LitteralNoeud('3')
    )
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('2 * 3')
  })
  test('Nombre', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instruction: NoeudModel = new NombreNoeud(2)

    const result = instruction.accept(javascriptGenerator)
    expect(result).toEqual('2')
  })
  test('Soustraction', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new SoustractionNoeud(
      new LitteralNoeud('2'),
      new LitteralNoeud('3')
    )
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('2 - 3')
  })
  test('Supérieur strict', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new SuperieurNoeud(
      new LitteralNoeud('2'),
      new LitteralNoeud('3')
    )
    const result = instructions.accept(javascriptGenerator)
    expect(result).toEqual('2 > 3')
  })
  test('lance une erreur sur une expression inconnue', () => {
    const javascriptGenerator = new JavascriptGenerator()
    class ExpressionInconnue extends ExpressionNoeud {
      accept<T>(visiteur: VisiteurNoeud<T, NoeudModel>): T {
        return visiteur.visit(this)
      }
    }
    const instructions: ExpressionNoeud = new ExpressionInconnue()
    expect(() => instructions.accept(javascriptGenerator)).toThrowError()
  })
})
