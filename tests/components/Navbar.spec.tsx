import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from '../../src/components/Navbar';

describe('tests in <Navbar/>', () => { 

  test('should render navbar with home icon selected', () => {
    const activeColor = '#534588'; 
    const { container } = render(<Navbar/>);
    
    const homeIcon = container.querySelector("[data-icon='home'] path") as SVGPathElement;
    const strokeSelectedColor = homeIcon.getAttribute('stroke');
    
    expect(strokeSelectedColor).toBe(activeColor);
  })

})