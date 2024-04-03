import {styled} from 'styled-components';

export type ButtonProps = {
  children: string,
  onClick: () => void,
  variant: string,
  disabled?: boolean,
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => {
    if (props.variant === 'error') return 'none';
    if (props.variant === 'disabled') return '#D0D1E1';
    return '#534588';
  }};
  color: ${props => {
    if (props.variant === 'error') return '#F04C4C';
    return '#FFF';
  }};

  font-size: 17px;
  font-weight: bold;
  border-radius: 8px;
  padding: .75rem 1rem;
  border: ${props => props.variant === 'error' ? '1px solid #F04C4C' : 'none'};
  cursor: pointer;
  transition: .15s ease-in-out;

  &:hover {
    background-color: ${props => props.variant === 'error' ? '#F04C4C' : '#322951'};
    border: ${props => props.variant === 'error' ? '1px solid #F04C4C' : 'none'};
    color: ${props => props.variant === 'error' && '#fff'};
  }

  &:disabled {
    background-color: #D0D1E1;
    cursor: not-allowed;
  }
`;
