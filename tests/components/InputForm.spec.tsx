import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputForm } from '../../src/components/InputForm';

describe('tests in <InputForm/>', () => { 
  const placeholder = 'Your Name Here';
  const onChangeMock = jest.fn();

  test('should show the input with placeholder text', () => { 
    render(<InputForm value='' onChange={onChangeMock} placeholder={placeholder} type='text'/>);

    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
    expect(input).toBeTruthy();
  })

});