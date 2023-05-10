import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 4px;
  padding-left: 4px;
  padding-top: 3px;
  padding-bottom: 3px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(3.5px);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  height: 48px;
  padding: 8px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.accent};
  ::placeholder {
    color: ${props => props.theme.colors.gray};
    font-size: 18px;
  }
`;
