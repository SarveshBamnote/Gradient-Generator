import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, gradientDirectionValue, isActive} = props
  const {displayText, value} = eachDirection

  const onClickGradientDirection = () => {
    gradientDirectionValue(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        onClick={onClickGradientDirection}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
