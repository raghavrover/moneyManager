import './index.css'

const TransactionItem = props => {
  const {transactionDetails, removeTransaction} = props
  const {id, title, amount, transactionType} = transactionDetails

  const deleteTransaction = () => {
    removeTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-item-text-css">{title}</p>
      <p className="transaction-item-text-css">Rs {amount}</p>
      <p className="transaction-item-text-css">{transactionType}</p>
      <button type="button" className="delete-btn" onClick={deleteTransaction}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-btn-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
