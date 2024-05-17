import React from 'react';
import { render } from '@testing-library/react';
import { colors } from '../../src/theme/colors';
import { Text } from '../../src/components/Text';

describe('tests in <Text/>', () => { 

  test('should render text correctly', () => { 
    const content = "I'm a paragraph";
    const variant = 'md';

    const { getByText } = render(<Text variant={variant} color={colors.purple[500]}>{content}</Text>)

    const text = getByText(content) as HTMLParagraphElement;
    expect(text).toBeTruthy();
  })

  test('should render text with a variant', () => { 
    const content = "I'm a h1 text";
    const variant = 'h1';

    const { getByRole } = render(<Text variant={variant} color={colors.purple[500]}>{content}</Text>)

    const textVariant = getByRole('heading', {level: 1}) as HTMLHeadElement;
    expect(textVariant).toBeTruthy();
  })

})