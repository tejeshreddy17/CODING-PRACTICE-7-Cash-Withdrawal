// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onclickValue = value => {
    const {balance} = this.state
    if (balance > 0) {
      this.setState(prevState => ({
        balance: prevState.balance - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    let {balance} = this.state
    if (balance < 0) {
      balance = 0
    }

    return (
      <div className="background-card">
        <div className="account-card">
          <div className="profile-container">
            <p className="profile-logo-style">S </p>
            <p className="profile-name-style">Sarah Williams</p>
          </div>
          <div className="amount-container">
            <p className="your-balance-style"> Your balance</p>
            <div className="amount-value-container">
              <p className="balamce-amount-style">{balance}</p>
              <p className="In-rupees-style">In rupees</p>
            </div>
          </div>
          <div className="withdraw-style">
            <p className="withdraw-heading-style">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="values-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                onclickValue={this.onclickValue}
                denomination={eachDenomination}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
