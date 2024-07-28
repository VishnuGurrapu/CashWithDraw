// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountDetails, onDecrement} = props
  const {value} = amountDetails
  const onDecrementAmount = () => {
    onDecrement(value)
  }
  return (
    <li className="item">
      <button onClick={onDecrementAmount} className="btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
