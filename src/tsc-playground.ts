import * as prettier from 'prettier'
import * as ts from 'typescript'
import createMarkdown from './createMarkdown'

const source = `let x: string  = 'string'
`

const result = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
})
;(async () =>
  createMarkdown(
    await prettier.format(result.outputText, {
      parser: 'babel',
    }),
    '',
    // assignation.accept(generateurCobol),
    './code.md',
  ))()
