import React from 'react';
import { render } from '@testing-library/react';
import { iconSizes } from '../../src/theme';
import { Checkbox } from '../../src/components/Checkbox';

describe('tests in <Checkbox/>', () => {

  test('should should show the checkbox unchecked', () => { 

    const checkboxText = 'Remind me';
    const iconSize = 'lg';

    const { container } = render(<Checkbox children={checkboxText} icon='CheckboxUncheckedIcon'/>)
    
    const uncheckedIcon = container.querySelector('[data-icon="checkbox-unchecked"]') as SVGElement;
    const width = uncheckedIcon.getAttribute('width');
    const height = uncheckedIcon.getAttribute('height');

    expect(uncheckedIcon).toBeTruthy();
    expect(width).toBe(iconSizes[iconSize]);
    expect(height).toBe(iconSizes[iconSize]);
  })

  test('should should show the checkbox checked', () => { 

    const checkboxText = 'Remind me';
    const iconSize = 'lg';

    const { container } = render(<Checkbox children={checkboxText} icon='CheckboxCheckIcon'/>)
    
    const checkIcon = container.querySelector('[data-icon="checkbox-check"]') as SVGElement;
    const width = checkIcon.getAttribute('width');
    const height = checkIcon.getAttribute('height');

    expect(checkIcon).toBeTruthy();
    expect(width).toBe(iconSizes[iconSize]);
    expect(height).toBe(iconSizes[iconSize]);
  })

})