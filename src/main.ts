import * as prettier from 'prettier'
import createMarkdown from './createMarkdown'

// TODO

const prettiedCode = prettier.format('2 + 4', { parser: 'babel' })

createMarkdown(prettiedCode, './code.md')
