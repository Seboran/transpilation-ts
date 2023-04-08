import { describe, expect, test } from 'vitest'
import NoeudModel from '../../../Noeud.model'
import AdditionNoeud from '../../../AdditionNoeud.model'
import AssignationNoeud from '../../../AssignationNoeud.model'
import ConditionNode from '../../../ConditionNode.model'
import LitteralNoeud from '../../../LitteralNoeud.model'
import MultiplicationNoeud from '../../../MultiplicationNoeud.model'
import NumberNoeud from '../../../NumberNoeud.model'
import SiNoeud from '../../../SiNoeud.model'
import SoustractionNoeud from '../../../SoustractionNoeud.model'
import SuperieurNoeud from '../../../SuperieurNoeud.model'
import JavascriptGenerator from '../JavascriptGenerator'
import ExpressionsNoeud from '../../../ExpressionsNoeud.model'

describe('Javascript Générateur', () => {
  test('Génére le bon javascript 1', () => {
    const instructions: NoeudModel = new SiNoeud(
      new ConditionNode(
        new SuperieurNoeud(new LitteralNoeud('X'), new LitteralNoeud('Y'))
      ),
      new AssignationNoeud(
        new LitteralNoeud('Z'),
        new AdditionNoeud(
          new NumberNoeud(2),
          new MultiplicationNoeud(new NumberNoeud(5), new NumberNoeud(3))
        )
      ),
      new AdditionNoeud(
        new NumberNoeud(2),
        new SoustractionNoeud(new NumberNoeud(5), new NumberNoeud(3))
      )
    )

    const javascriptGenerator = new JavascriptGenerator()
    instructions.accept(javascriptGenerator)
    expect(javascriptGenerator.print()).toEqual(
      'if (X > Y) { var Z = 2 + 5 * 3 } else { 2 + 5 - 3 }'
    )
  })
  test('Assignation', () => {
    const javascriptGenerator = new JavascriptGenerator()

    const instructions: AssignationNoeud = new AssignationNoeud(
      new LitteralNoeud('bonjour'),
      new AdditionNoeud(new NumberNoeud(2), new LitteralNoeud('salut'))
    )

    instructions.accept(javascriptGenerator)

    expect(javascriptGenerator.print()).toEqual('var bonjour = 2 + salut')
  })
  test('Assignation avec const', () => {
    const javascriptGenerator = new JavascriptGenerator()

    const instructions: AssignationNoeud = new AssignationNoeud(
      new LitteralNoeud('bonjour'),
      new NumberNoeud(2),
      'final'
    )

    instructions.accept(javascriptGenerator)

    expect(javascriptGenerator.print()).toEqual('const bonjour = 2')
  })
  test("Liste d'expressions", () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new ExpressionsNoeud(
      new LitteralNoeud('2'),
      new LitteralNoeud('3')
    )

    instructions.accept(javascriptGenerator)
    expect(javascriptGenerator.print()).toEqual('2; 3;')
  })
  test("Liste d'expressions 2", () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instructions: NoeudModel = new ExpressionsNoeud(
      new AssignationNoeud(new LitteralNoeud('x'), new NumberNoeud(2)),
      new AssignationNoeud(new LitteralNoeud('x'), new NumberNoeud(3)),
      new AdditionNoeud(new NumberNoeud(2), new NumberNoeud(2))
    )

    instructions.accept(javascriptGenerator)
    expect(javascriptGenerator.print()).toEqual('var x = 2; var x = 3; 2 + 2;')
  })
  test('Fonction 1', () => {
    const javascriptGenerator = new JavascriptGenerator()
    const instruction: NoeudModel = new FonctionNoeud(
      new LitteralNoeud('mafonction'),
      new NumberNoeud(2),
      new NumberNoeud(3)
    )
    instruction.accept(javascriptGenerator)
    expect(javascriptGenerator.print()).toEqual('mafonction(2,3)')
  })
})
