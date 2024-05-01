import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../../src/components/Icon';
import { iconSizes } from '../../src/theme';

describe('tests in <Icon/>', () => { 
  test('should render icon correctly', () => { 
    const size = 'md';
    const { container } = render(<Icon name='UserIcon' size={size}/>);
    
    const iconSVG = container.querySelector("[data-icon='user']");
    expect(iconSVG).toBeTruthy();

  })

  test('should render icon with large size', () => { 
    const size = 'lg';
    const { container } = render(<Icon name='CheckIcon' size={size}/>);
    
    const iconSVG = container.querySelector("[data-icon='check']");
    const widthIcon = iconSVG?.getAttribute('width');
    const heightIcon = iconSVG?.getAttribute('height');
    
    expect(widthIcon).toBe(iconSizes[size]);
    expect(heightIcon).toBe(iconSizes[size]);

  })
})