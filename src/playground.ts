import { format } from 'prettier'
import createMarkdown from './createMarkdown'
import AdditionNoeud from './model/AdditionNoeud.model'
import AssignationNoeud from './model/AssignationNoeud.model'
import LitteralNoeud from './model/LitteralNoeud.model'
import NombreNoeud from './model/NombreNoeud.model'
import CobolGenerator from './visiteurs/impl/generator/cobol/CobolGenerator'
import JavascriptGenerator from './visiteurs/impl/generator/js/JavascriptGenerator'

// TODO

// const prettiedCode = format('2 + 4', { parser: 'babel' })

// createMarkdown(prettiedCode, './code.md')

const instruction = new AssignationNoeud(
  new LitteralNoeud('test'),
  new AdditionNoeud(new NombreNoeud(2), new NombreNoeud(3)),
)
const generateurCobol = new CobolGenerator()
createMarkdown(instruction.accept(generateurCobol), './cobolcode.md', 'cobol')

const generateurJavascript = new JavascriptGenerator()
;(async () =>
  createMarkdown(
    await format(instruction.accept(generateurJavascript), {
      parser: 'babel',
    }),
    './code.md',
  ))()
