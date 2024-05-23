import React, { useState, ChangeEvent } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { OptionMenu } from '../../src/components/OptionMenu';

describe('tests in <OptionMenu/>', () => {

  test('should show arrow type option', () => { 

    const { container } = render( <OptionMenu icon='LockIcon' type='arrow'>Change password</OptionMenu> )
    
    const optionArrow = screen.getByTestId('option-arrow');
    const arrowIcon = container.querySelector('[data-icon="lock"]') as SVGElement;
    
    expect(optionArrow).toBeTruthy();
    expect(arrowIcon).toBeTruthy();

  })

  test('should show the radio type option with the unchecked icon', () => { 

    render( <OptionMenu icon='LightIcon' type='radio' id='light-theme' name='light-theme'>Light Mode</OptionMenu> )

    const optionRadio = screen.getByTestId('option-radio');
    const inputRadio = screen.getByRole('radio') as HTMLInputElement;

    expect(optionRadio).toBeTruthy();
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
          <OptionMenu onChange={handleCheck} checked={optionRadio === 'light-theme'} id='light-theme' name='light-theme' type='radio' icon='LightIcon'>
            Light Theme
          </OptionMenu>
          <OptionMenu onChange={handleCheck} checked={optionRadio === 'dark-theme'} id='dark-theme' name='dark-theme' type='radio' icon='DarkIcon'>
            Dark Theme
          </OptionMenu>
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