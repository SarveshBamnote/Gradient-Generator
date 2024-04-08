import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 600px;
`

export const Heading = styled.h1`
  font-size: 24px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const ChooseDirection = styled.p`
  font-size: 20px;
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
`

export const DirectionItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  list-style-type: none;
`

export const PickTheColors = styled.p`
  font-size: 20px;
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
`

export const ColorPickersContainer = styled.div`
  display: flex;
  min-width: 350px;
  justify-content: space-around;
`

export const ColorPickerInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorPickerValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  font-size: 14px;
  color: #1e293b;
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-weight: 600;
  border-radius: 6px;
  padding: 12px 24px 12px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 28px;
`
