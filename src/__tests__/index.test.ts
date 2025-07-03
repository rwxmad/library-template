import { test, expect } from '@jest/globals'

test('main', () => {
  expect('foo').not.toEqual('bar')
})
