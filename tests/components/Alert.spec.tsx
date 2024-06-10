import React from 'react';
import { render, screen } from '@testing-library/react';
import { iconSizes } from '../../src/theme';
import { Alert } from '../../src/components/Alert';

describe('tests in <Alert/>', () => { 

  test('should show the alert with a success icon and message', () => { 
    
    const alertMsg = 'Email sent';
    const iconSize = 'lg'; 

    const { container } = render (
      <Alert
        children={alertMsg}
        type='success'
        icon='CheckIcon'
      />
    );
    
    const successIcon = container.querySelector("[data-icon='check']") as SVGElement;
    const widthIcon = successIcon.getAttribute('width');
    const heightIcon = successIcon.getAttribute('height');
    
    const successMsg = screen.getByText(alertMsg) as HTMLParagraphElement;
    
    expect(successIcon).toBeTruthy();
    expect(widthIcon).toBe(iconSizes[iconSize]);
    expect(heightIcon).toBe(iconSizes[iconSize]);
    expect(successMsg).toBeTruthy();
  })

  test('should show the alert with a error icon and message', () => { 
    
    const alertMsg = 'An error occurred';
    const iconSize = 'lg'; 

    const { container } = render (
      <Alert
        children={alertMsg}
        type='error'
        icon='ErrorIcon'
      />
    );
    
    const successIcon = container.querySelector("[data-icon='error']") as SVGElement;
    const widthIcon = successIcon.getAttribute('width');
    const heightIcon = successIcon.getAttribute('height');
    
    const successMsg = screen.getByText(alertMsg) as HTMLParagraphElement;
    
    expect(successIcon).toBeTruthy();
    expect(widthIcon).toBe(iconSizes[iconSize]);
    expect(heightIcon).toBe(iconSizes[iconSize]);
    expect(successMsg).toBeTruthy();
  })

})