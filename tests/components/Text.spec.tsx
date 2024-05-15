import React from 'react';
import { render, screen } from '@testing-library/react';
import { colors } from '../../src/theme/colors';
import { fontSizes, fontWeights } from '../../src/theme/index';
import { Text } from '../../src/components/Text';



describe('tests in <Text/>', () => { 

  test('should render text correctly', () => { 
    const content = "I'm a paragraph";
    const variantText = 'p_md';
    const weightText = 'light';

    const { container } = render(<Text variant={variantText} weight={weightText} color={colors.purple[500]}>{content}</Text>)

    const text = container.querySelector('p') as HTMLParagraphElement;
    const textSize = text.getAttribute('variant');
    const weightSize = text.getAttribute('weight');

    expect(text).toBeTruthy();
    expect(textSize).toBe(fontSizes[variantText]);
    expect(weightSize).toBe(fontWeights[weightText]);
    
  })

  test('should render text with a h1 variant', () => { 
    const content = "I'am a header of type h1";
    const variantText = 'h1';
    const weightText = 'bold';

    const { container } = render(<Text variant={variantText} weight={weightText} color={colors.purple[500]}>{content}</Text>)

    const text = container.querySelector('h1') as HTMLHeadElement;
    const textSize = text.getAttribute('variant');
    const weightSize = text.getAttribute('weight');

    expect(text).toBeTruthy();
    expect(textSize).toBe(fontSizes[variantText]);
    expect(weightSize).toBe(fontWeights[weightText]);
    
  })

  test('should render correctly with a as property', () => { 
    const content = "I'am a span";
    const variantText = 'alert';
    const weightText = 'book';

    const { container } = render(<Text as='nav' variant={variantText} weight={weightText} color={colors.purple[500]}>{content}</Text>)

    expect(container.querySelector('span')).toBeFalsy();
    expect(container.querySelector('nav')).toBeTruthy();
    
  })

})