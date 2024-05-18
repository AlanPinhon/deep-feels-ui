import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from '../../src/components/Button';

describe('tests in <Button/>', () => {
  const onClickMock = jest.fn();

  test('should renders with "Login" text', () => {
    render(<Button children="Login" onClick={onClickMock} variant='primary'/>)

    const button = screen.getByText('Login') as HTMLButtonElement;
    expect(button).toBeTruthy();
  });

  test('should calls onClick function when clicked', async () => {
    const user = userEvent.setup();
    render(<Button children="Login" onClick={onClickMock} variant='primary'/>)

    const button = screen.getByText('Login') as HTMLButtonElement;
    await user.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

});