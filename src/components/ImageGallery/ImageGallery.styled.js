import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  place-content: center;
  max-width: calc(100vw - 48px);
  margin: 1vh auto;
  padding-right: 4px;
  padding-left: 4px;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin: 1vh auto;
`;

export const Text = styled.p`
  max-width: 80%;
  color: ${props => props.theme.colors.gray};
  text-align: center;
  font-size: 18px;
`;
