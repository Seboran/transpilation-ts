import * as prettier from 'prettier'
import createMarkdown from './createMarkdown'
import { AssignationNoeud, LitteralNoeud } from './model'
import AdditionNoeud from './model/AdditionNoeud.model'
import JavascriptGenerator from './visiteurs/impl/generator/js/JavascriptGenerator'

const instruction = new AdditionNoeud()

const assignation = new AssignationNoeud(new LitteralNoeud('X'), instruction)

// const generateurCobol = new CobolGenerator()

const generateurJavascript = new JavascriptGenerator()
;(async () =>
  createMarkdown(
    await prettier.format(assignation.accept(generateurJavascript), {
      parser: 'babel',
    }),
    '',
    // assignation.accept(generateurCobol),
    './code.md',
  ))()
