import React, { ChangeEvent, useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from '../../src/components/Checkbox';

describe('tests in <Checkbox/>', () => {

  test('should show the checkbox unchecked', () => { 
    const checkboxText = 'Remind me';
    const onChangeMock = jest.fn();

    const { container } = render(<Checkbox children={checkboxText} checked={false} onChange={onChangeMock}/>);

    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(checkbox.checked).toBeFalsy();
  })

  test('should change the checkbox from unchecked to checked', () => { 
    const checkboxText = 'Remind me';

    const TestComponent = () => {
      const [isChecked, setIsChecked] = useState(false);

      const handleInputCheck = ({target}:ChangeEvent<HTMLInputElement>) => {
        const { checked } = target;
        setIsChecked(checked);
      }

      return <Checkbox children={checkboxText} checked={isChecked} onChange={handleInputCheck}/>
    }

    const { container } = render(<TestComponent/>);

    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
  })

})