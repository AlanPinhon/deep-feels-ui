import React, { useState, ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event';
import { SearchInput } from '../../src/components/SearchInput';

describe('tests in <SearchInput/>', () => {

  test('should render with "Search" placeholder', () => {
    const onChangeMock = jest.fn();
    render(<SearchInput placeholder='Search' onChange={onChangeMock} value=''/>);

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchInput).toBeTruthy();
  })

  test('should change the input value', async () => {
    const user = userEvent.setup();

    const SearchInputTest = () => {
      const [value, setValue] = useState('');

      const handleNewValue = ({target}:ChangeEvent<HTMLInputElement>) => setValue(target.value);

      return (
        <SearchInput
        value={value}
        placeholder='Search'
        onChange={handleNewValue}
        />
      )
    }

    render(<SearchInputTest/>);

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    await user.type(searchInput, 'test value');
    
    expect(searchInput.value).toBe('test value');
  })

})