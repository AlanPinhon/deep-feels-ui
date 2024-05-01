import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from '../../src/components/Icon';

describe('tests in <Icon/>', () => { 
  test('should render icon correctly', () => { 
    
    render(<Icon name='UserIcon' size='md'/>);
    
    const icon = document.querySelector('#user');
    expect(icon).toBeTruthy();

  })
})