import { describe, expect, it } from 'vitest'
import { sum } from '../src'

describe('unbuild-starter', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
