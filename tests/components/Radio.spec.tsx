import React, { useState, ChangeEvent } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Text } from '../../src/components/Text';
import { Radio } from '../../src/components/Radio';

describe('tests in <Radio/>', () => {

  test('should show the radio input with the unchecked icon', () => { 
    const onChangeMock = jest.fn();
    render( <Radio id='theme' name='light-theme' onChange={onChangeMock}/> )

    const inputRadio = screen.getByRole('radio') as HTMLInputElement;
    expect(inputRadio.checked).toBeFalsy();

  })

  test('should change the radio input status to checked', () => { 

    const TestComponent = () => {

      const [optionRadio, setOptionRadio] = useState('')

      const handleCheck = ({target}:ChangeEvent<HTMLInputElement>) => {
        const name = target.name;
        setOptionRadio(name);
      }

      return (
        <div>
          <Text variant='label' htmlFor='light-theme'>Light Theme</Text>
          <Radio onChange={handleCheck} checked={optionRadio === 'light-theme'} id='light-theme' name='light-theme'/>
          <Text variant='label' htmlFor='dark-theme'>Dark Theme</Text>
          <Radio onChange={handleCheck} checked={optionRadio === 'dark-theme'} id='dark-theme' name='dark-theme'/>
        </div>
      )
    }

    render(<TestComponent/>);
    const optionLight = screen.getByLabelText('Light Theme') as HTMLInputElement;
    const optionDark = screen.getByLabelText('Dark Theme') as HTMLInputElement;
    
    expect(optionLight.checked).toBeFalsy();
    expect(optionDark.checked).toBeFalsy();

    fireEvent.click(optionLight);
    expect(optionLight.checked).toBeTruthy();
    expect(optionDark.checked).toBeFalsy();

    fireEvent.click(optionDark);
    expect(optionLight.checked).toBeFalsy();
    expect(optionDark.checked).toBeTruthy();

  })

})