import React from 'react'
import { render } from '@testing-library/react'

describe('test', () => {
  it('should pass', () => {
    render(<div />)
    expect(true).toEqual(true)
  })
})
