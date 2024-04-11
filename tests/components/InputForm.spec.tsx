import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputForm } from '../../src/components/InputForm';

describe('tests in <InputForm/>', () => { 

  test('should change the value in the input', () => { 

    render(
      <InputForm
        children='Email'
        placeholder='user@email.com'
        type= 'email'
        errorText='Enter a valid email'
      />
    )
    
    const input = screen.getByPlaceholderText('user@email.com') as HTMLInputElement;
    fireEvent.change(input, {target: {value : 'alan32@gmail.com'}});
    expect(input.value).toBe('alan32@gmail.com');
  })

  test('Should show an error message if the input value is invalid', () => { 

    render(
      <InputForm
        children='Email'
        placeholder='user@email.com'
        type= 'email'
        errorText='Enter a valid email'
      />
    )
    
    const input = screen.getByPlaceholderText('user@email.com') as HTMLInputElement;
    fireEvent.change(input, {target: {value : 'alan32@'}});
    expect(screen.getByText('Enter a valid email')).toBeTruthy();
  })

});