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
})
