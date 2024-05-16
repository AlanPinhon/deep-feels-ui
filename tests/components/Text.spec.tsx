import React from 'react';
import { render, screen } from '@testing-library/react';
import { colors } from '../../src/theme/colors';
import { Text } from '../../src/components/Text';

describe('tests in <Text/>', () => { 

  test('should render text correctly', () => { 
    const content = "I'm a paragraph";
    const { container } = render(<Text color={colors.purple[500]}>{content}</Text>)

    const text = container.querySelector('p') as HTMLParagraphElement;
    expect(text).toBeTruthy();
  })

  test('should render text with a variant', () => { 
    const content = "I'm a h1 text";
    const variant = 'h1';

    const { container } = render(<Text variant={variant} color={colors.purple[500]}>{content}</Text>)

    const text = container.querySelector('h1') as HTMLHeadElement;
    const textVariant = text.getAttribute('variant');

    expect(text).toBeTruthy();
    expect(textVariant).toBe(variant);
  })

})