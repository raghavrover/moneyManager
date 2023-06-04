import './index.css'

const MoneyDetails = props => {
  const {expenses, income} = props
  const incomeValue = income > 0 ? `Rs ${income}` : 0
  const expensesValue = expenses > 0 ? `Rs ${expenses}` : 0
  const balanceValue = income - expenses > 0 ? `Rs ${income - expenses}` : 0

  return (
    <div className="money-details-container">
      <div className="money-item-card balance-item-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-item-card-img"
          alt="balance"
        />
        <div className="money-card-details">
          <p className="money-card-title">Your Balance</p>
          <p className="money-card-amount" data-testid="balanceAmount">
            {balanceValue}
          </p>
        </div>
      </div>
      <div className="money-item-card income-item-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-item-card-img"
          alt="income"
        />
        <div className="money-card-details">
          <p className="money-card-title">Your Income</p>
          <p className="money-card-amount" data-testid="incomeAmount">
            {incomeValue}
          </p>
        </div>
      </div>
      <div className="money-item-card expenses-item-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-item-card-img"
          alt="expenses"
        />
        <div className="money-card-details">
          <p className="money-card-title">Your Expenses</p>
          <p className="money-card-amount" data-testid="expensesAmount">
            {expensesValue}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
