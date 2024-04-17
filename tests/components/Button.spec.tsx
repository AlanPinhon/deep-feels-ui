import React from 'react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from '../../src/components/Button';

describe('tests in <Button/>', () => {
  const onClickMock = jest.fn();

  test('should renders with "Login" text', () => {
    const { getByText } = render(<Button children="Login" onClick={onClickMock} variant='primary'/>)

    const button = getByText('Login') as HTMLButtonElement;
    expect(button).toBeTruthy();
  });

  test('should calls onClick function when clicked', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Button children="Login" onClick={onClickMock} variant='primary'/>)

    const button = getByText('Login') as HTMLButtonElement;
    await user.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

});