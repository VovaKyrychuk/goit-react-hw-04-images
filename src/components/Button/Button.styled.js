import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 4px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16 px;
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.gray};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;
