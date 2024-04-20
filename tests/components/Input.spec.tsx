import React, { useState, ChangeEvent } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Input } from '../../src/components/Input';

describe('tests in <Input/>', () => { 

  test('should show the input with placeholder text', () => { 
    const onChangeMock = jest.fn();
    render(<Input value='' onChange={onChangeMock} placeholder='Your Name Here' type='text'/>);

    const input = screen.getByPlaceholderText('Your Name Here') as HTMLInputElement;
    expect(input).toBeTruthy();
  })

  test('should show the icon in the input', () => { 
    const onChangeMock = jest.fn();
    render(<Input value='' onChange={onChangeMock} placeholder='Search' type='text' icon/>);

    const icon = document.getElementById('search');
    expect(icon).toBeTruthy();
  })

  test('should change the input value', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const [value, setValue] = useState('');

      const handleInputValue = ({target}:ChangeEvent<HTMLInputElement>) => setValue(target.value)

      return ( 
        <Input
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