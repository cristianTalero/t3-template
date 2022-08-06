import React from 'react'
import { render } from '@testing-library/react'
import Example from '../components/example'

test('loads and displays greeting', async () => {
  const example = render(<Example />)

  expect(await example.findAllByText('Example')).toBeTruthy()
})
