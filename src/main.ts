import AdditionNoeud from './model/AdditionNoeud.model'
import AssignationNoeud from './model/AssignationNoeud.model'
import ConditionNode from './model/ConditionNode.model'
import ExpressionsNoeud from './model/ExpressionsNoeud.model'
import FonctionNoeud from './model/FonctionNoeud.model'
import LitteralNoeud from './model/LitteralNoeud.model'
import MultiplicationNoeud from './model/MultiplicationNoeud.model'
import NoeudModel from './model/Noeud.model'
import NombreNoeud from './model/NombreNoeud.model'
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
/**
 * On veut aussi rajouter un appel de fonction avant
 */

const instructions: NoeudModel = new ExpressionsNoeud(
  new FonctionNoeud(new LitteralNoeud('mafonction')),
  siNoeud
)

const javascriptGenerator = new JavascriptGenerator()
instructions.accept(javascriptGenerator)

console.log(prettier.format(javascriptGenerator.print(), { parser: 'babel' }))
