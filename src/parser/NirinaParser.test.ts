import { test, expect, describe } from 'vitest'
import NirinaParser from './NirinaParser'

describe.skip('parsing du framework nirina.js', () => {
  test('Parse un bouton', () => {
    const parser = new NirinaParser()
    expect(parser.parse(''))
  })
})
