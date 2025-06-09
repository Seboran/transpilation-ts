import prettier from 'prettier'
import { describe, expect, test } from 'vitest'
import createMarkdown from '../createMarkdown'
import { AdditionNoeud, AssignationNoeud, LitteralNoeud, NombreNoeud } from '../model'
import { CobolGenerator, JavascriptGenerator } from '../visiteurs'

describe('playground', () => {
  test('should work', async () => {
    const instruction = new AssignationNoeud(
      new LitteralNoeud('test'),
      new AdditionNoeud(new NombreNoeud(5), new NombreNoeud(3)),
    )
    const generateurJavascript = new JavascriptGenerator()
    const prettiedCode = await prettier.format(instruction.accept(generateurJavascript), {
      parser: 'babel',
    })
    expect(prettiedCode).toEqual('var test = 5 + 3;\n')
  })

  test('other test', () => {
    const instruction = new AssignationNoeud(
      new LitteralNoeud('test'),
      new AdditionNoeud(new NombreNoeud(5), new NombreNoeud(3)),
    )
    const generateurCobol = new CobolGenerator()

    const generatedCobol = instruction.accept(generateurCobol)
    expect(generatedCobol).toEqual('ADD 5 3 GIVING test')
  })
})
