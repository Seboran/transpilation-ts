import AdditionNoeud from './model/AdditionNoeud.model'
import AssignationNoeud from './model/AssignationNoeud.model'
import ConditionNode from './model/ConditionNode.model'
import LitteralNoeud from './model/LitteralNoeud.model'
import MultiplicationNoeud from './model/MultiplicationNoeud.model'
import NoeudModel from './model/Noeud.model'
import NumberNoeud from './model/NumberNoeud.model'
import SiNoeud from './model/SiNoeud.model'
import SoustractionNoeud from './model/SoustractionNoeud.model'
import SuperieurNoeud from './model/SuperieurNoeud.model'

import JavascriptGenerator from './model/visiteurs/impl/JavascriptGenerator'

import * as prettier from 'prettier'

/**
 * On veut représenter avec des nodes l'instruction suivante en pseudo code :
 *
 * si X > Y:
 *   2 + (5 * 3)
 * sinon:
 *   2 + (5 - 3)
 */

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

console.log(prettier.format(javascriptGenerator.print(), { parser: 'babel' }))
