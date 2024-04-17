import React, { useState, ChangeEvent } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { InputForm } from '../../src/components/InputForm';

describe('tests in <InputForm/>', () => { 

  test('should show the input with placeholder text', () => { 
    const onChangeMock = jest.fn();
    render(<InputForm value='' onChange={onChangeMock} placeholder='Your Name Here' type='text'/>);

    const input = screen.getByPlaceholderText('Your Name Here') as HTMLInputElement;
    expect(input).toBeTruthy();
  })

  test('should change the input value', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const [value, setValue] = useState('');

      const handleInputValue = ({target}:ChangeEvent<HTMLInputElement>) => setValue(target.value)

      return ( 
        <InputForm
          onChange={handleInputValue}
          type='text'
          placeholder='Your Name Here'
          value={value}
        />
      )
    }

    render(<TestComponent/>);
    const input = screen.getByPlaceholderText('Your Name Here') as HTMLInputElement;
    
    await waitFor(async () => {
      await user.type(input, 'test value')
    })
    
    expect(input.value).toBe('test value');
  })

});