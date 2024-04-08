import styled from 'styled-components'

export const ListItem = styled.li`
  width: 46%;
  margin: 5px;

  @media screen and (min-width: 768px) {
    width: 120px;
    margin: 5px;
  }
`

export const DirectionButton = styled.button`
  width: 100%;
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-size: 14px;
  background-color: #ffffff;
  font-family: 'Roboto';
  border-radius: 5px;
  font-weight: 600;
  padding: 12px 24px 12px 24px;
  border: none;
  cursor: pointer;
`
