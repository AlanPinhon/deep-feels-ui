import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { OptionMenu } from '../../src/components/OptionMenu';

describe('tests in <OptionMenu/>', () => {

  test('should show arrow type option', () => { 
    const onClickMock = jest.fn();
    const { container } = render(
      <OptionMenu
        onClick={onClickMock}
        children='Change password'
        icon='LockIcon'
        type='arrow'
      />
    )

    const arrowIcon = container.querySelector("[data-icon='arrow-right']")
    expect(arrowIcon).toBeTruthy();

  })

  test('should show the check type option with the unchecked icon', () => { 
    const onClickMock = jest.fn();
    const { container } = render(
      <OptionMenu
        onClick={onClickMock}
        children='Light Mode'
        icon='LightIcon'
        type='check'
      />
    )

    const uncheckedIcon = container.querySelector("[data-icon='radio-unchecked']")
    expect(uncheckedIcon).toBeTruthy();

  })

  test('should change the check type option from unchecked icon to fill icon', async () => { 
    const user = userEvent.setup();

    const TestComponent = () => {

      const [isChecked, setIsChecked] = useState(false);

      const handleCheck = () => {
        setIsChecked(!isChecked);
      }

      return (
        <OptionMenu
          onClick={handleCheck}
          children='Dark Mode'
          icon='DarkIcon'
          type='check'
          isChecked={isChecked}
        />
      )
    }

    const { container , getByText } = render(<TestComponent/>);

    const optionCheck = getByText('Dark Mode') as HTMLDivElement;
    await user.click(optionCheck);

    const checkedIcon = container.querySelector("[data-icon='radio-fill']")
    expect(checkedIcon).toBeTruthy();
  })

})