import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  GradientGeneratorContainer,
  Heading,
  ChooseDirection,
  DirectionItemList,
  PickTheColors,
  ColorPickersContainer,
  ColorPickerInputContainer,
  ColorPickerValue,
  CustomColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    gradientValue: ` to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  gradientDirectionValue = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onChangeColor1 = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onSubmitGradient = () => {
    const {
      firstColorInput,
      secondColorInput,
      activeGradientDirection,
    } = this.state

    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  render() {
    const {
      firstColorInput,
      secondColorInput,
      activeGradientDirection,
      gradientValue,
    } = this.state

    return (
      <GradientContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <GradientGeneratorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseDirection>Choose Direction</ChooseDirection>
          <DirectionItemList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                eachDirection={each}
                key={each.directionId}
                isActive={activeGradientDirection === each.value}
                gradientDirectionValue={this.gradientDirectionValue}
              />
            ))}
          </DirectionItemList>
          <PickTheColors>Pick the Colors</PickTheColors>
          <ColorPickersContainer>
            <ColorPickerInputContainer>
              <ColorPickerValue>{firstColorInput}</ColorPickerValue>
              <CustomColorInput
                onChange={this.onChangeColor1}
                value={firstColorInput}
                type="color"
              />
            </ColorPickerInputContainer>
            <ColorPickerInputContainer>
              <ColorPickerValue>{secondColorInput}</ColorPickerValue>
              <CustomColorInput
                onChange={this.onChangeColor2}
                value={secondColorInput}
                type="color"
              />
            </ColorPickerInputContainer>
          </ColorPickersContainer>
          <GenerateButton onClick={this.onSubmitGradient} type="button">
            Generate
          </GenerateButton>
        </GradientGeneratorContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
