import * as prettier from 'prettier'
import createMarkdown from './createMarkdown'
import AdditionNoeud from './model/AdditionNoeud.model'
import AssignationNoeud from './model/AssignationNoeud.model'
import LitteralNoeud from './model/LitteralNoeud.model'
import NombreNoeud from './model/NombreNoeud.model'
import CobolGenerator from './visiteurs/impl/generator/cobol/CobolGenerator'
import JavascriptGenerator from './visiteurs/impl/generator/js/JavascriptGenerator'
import SiNoeud from './model/SiNoeud.model'
import SuperieurNoeud from './model/SuperieurNoeud.model'
import ConditionNode from './model/ConditionNode.model'
import SoustractionNoeud from './model/SoustractionNoeud.model'
import ExpressionsNoeud from './model/ExpressionsNoeud.model'

const calculs = new AssignationNoeud(
  new LitteralNoeud('x'),
  new AdditionNoeud(
    new NombreNoeud(2),
    new SoustractionNoeud(new NombreNoeud(5), new NombreNoeud(3))
  )
)

const calculsConvolues = new ExpressionsNoeud(
  new AssignationNoeud(
    new LitteralNoeud('x'),
    new SoustractionNoeud(new NombreNoeud(5), new NombreNoeud(3)),
    'default'
  ),
  new AssignationNoeud(
    new LitteralNoeud('x'),
    new AdditionNoeud(new NombreNoeud(2), new LitteralNoeud('x')),
    'reaffect'
  )
)

const siNoeud = new SiNoeud(
  new ConditionNode(
    new SuperieurNoeud(new LitteralNoeud('X'), new LitteralNoeud('Y'))
  ),
  new LitteralNoeud('X'),
  calculs
)
const generateurCobol = new CobolGenerator()
const generateurJavascript = new JavascriptGenerator()
createMarkdown(
  prettier.format(calculsConvolues.accept(generateurJavascript), {
    parser: 'babel',
  }),
  calculsConvolues.accept(generateurCobol),
  './code.md'
)
