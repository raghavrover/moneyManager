import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: transactionTypeOptions[0].displayText,
    expenses: 0,
    income: 0,
    transactionsList: [],
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  getTransactionType = event => {
    this.setState({transactionType: event.target.value})
  }

  removeTransaction = id => {
    const {transactionsList} = this.state
    const newTransactionsList = transactionsList.filter(
      transaction => transaction.id !== id,
    )
    const transObject = transactionsList.find(
      transaction => transaction.id === id,
    )
    const {amount, transactionType} = transObject

    if (transactionType === 'Income') {
      this.setState(prevState => ({income: prevState.income - amount}))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - amount,
      }))
    }
    this.setState({transactionsList: [...newTransactionsList]})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, transactionType, transactionsList} = this.state

    if (title === '' || amount === '') {
      return
    }

    if (transactionType === 'Income') {
      this.setState(prevState => ({income: prevState.income + amount}))
    } else {
      this.setState(prevState => ({expenses: prevState.expenses + amount}))
    }

    const transactionObject = {id: uuidV4(), title, amount, transactionType}
    this.setState({
      transactionsList: [...transactionsList, transactionObject],
    })

    this.setState({
      title: '',
      amount: '',
      transactionType: transactionTypeOptions[0].displayText,
    })
  }

  render() {
    const {
      transactionsList,
      title,
      amount,
      transactionType,
      expenses,
      income,
    } = this.state

    return (
      <div className="money-manager-bg-container">
        <div className="greeting-card">
          <h1 className="banker-name">Hi, Richard</h1>
          <p className="greet-msg">
            Welcome back to your
            <span className="money-manager-text"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails expenses={expenses} income={income} />
        <div className="transaction-form-and-stats-container">
          <form
            className="add-transactions-form"
            onSubmit={this.onAddTransaction}
          >
            <h1 className="add-transaction-title">Add Transaction</h1>
            <div className="input-data-container">
              <label htmlFor="title" className="label-el">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="input-element"
                onChange={this.getTitle}
                value={title}
              />
            </div>
            <div className="input-data-container">
              <label htmlFor="amount" className="label-el">
                AMOUNT
              </label>
              <input
                id="amount"
                type="number"
                placeholder="AMOUNT"
                className="input-element"
                onChange={this.getAmount}
                value={amount}
              />
            </div>
            <div className="input-data-container">
              <label htmlFor="type" className="label-el">
                TYPE
              </label>
              <select
                id="type"
                className="input-element menu-list"
                value={transactionType}
                onChange={this.getTransactionType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-transaction-btn" type="submit">
              Add
            </button>
          </form>
          <div className="transactions-container">
            <h1 className="history-text">History</h1>
            <div className="history-list-header">
              <p className="history-list-title">Title</p>
              <p className="history-list-title">Amount</p>
              <p className="history-list-title">Type</p>
            </div>

            <ul className="history-list-container">
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  removeTransaction={this.removeTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
