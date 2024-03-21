import React from 'react';
import {render, screen} from '@testing-library/react';
import { SayHi } from '../src';

describe('tests in SayHi', () => {
  test('should say Hi', () => {
    render(<SayHi/>)
    
    const gretting = screen.getByText('Hola a todos!!!');

    expect(gretting).toBeTruthy();
  })
})