// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onDecrement = amount => {
    this.setState(prevState => {
      const newCount = prevState.count - amount
      if(newCount <= 0){
        return {count: 0}
      }
      return {count: newCount}
    })
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="mainContainer">
        <div className="bgContainer">
          <div className="profile">
            <p className="profilepic">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balanceContainer">
            <p className="yourBalanceInWords">Your Balance</p>
            <div className="RupeesContainer">
              <p className="Rupees">{count}</p>
              <p className="RupeesInWords">In Rupees</p>
            </div>
          </div>
          <div className="withdrawContainer">
            <p className="withdraw">Withdraw</p>
            <p className="choose"> CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                amountDetails={each}
                onDecrement={this.onDecrement}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
