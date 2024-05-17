import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../../src/components/Icon';
import { iconSizes } from '../../src/theme';
import { colors } from '../../src/theme/colors';

describe('tests in <Icon/>', () => {
  
  test('should render icon correctly', () => { 
    const size = 'md';
    const { container } = render(<Icon name='UserIcon' size={size} stroke={colors.purple[500]}/>);
    
    const iconSVG = container.querySelector("[data-icon='user']") as SVGElement;
    expect(iconSVG).toBeTruthy();

  })

  test('should render icon with large size', () => { 
    const size = 'lg';
    const { container } = render(<Icon name='CheckIcon' size={size} stroke={colors.purple[500]}/>);
    
    const iconSVG = container.querySelector("[data-icon='check']") as SVGElement;
    const widthIcon = iconSVG.getAttribute('width');
    const heightIcon = iconSVG.getAttribute('height');
    
    expect(widthIcon).toBe(iconSizes[size]);
    expect(heightIcon).toBe(iconSizes[size]);

  })

  test('should render icon with stroke and fill', () => { 
    const size = 'xl';
    const { container } = render(<Icon name='HeartIcon' size={size} fill={colors.red[400]} stroke={colors.red[600]}/>);

    const heartIcon = container.querySelector("[data-icon='heart']") as SVGElement;
    const strokeHeartIcon = container.querySelector("[data-icon='heart'] path") as SVGPathElement;
    
    const fillColor = heartIcon.getAttribute('fill');
    const strokeColor = strokeHeartIcon.getAttribute('stroke');
    
    expect(fillColor).toBe(colors.red[400]);    
    expect(strokeColor).toBe(colors.red[600]);

  })

  test('should render icon with background', () => { 
    const size = 'lg';

    const { getByTestId } = render(<Icon name='MobileIcon' size={size} stroke={colors.purple[500]} background/>);

    const background = getByTestId('background-icon') as HTMLDivElement;
    expect(background).toBeTruthy();

  })

})