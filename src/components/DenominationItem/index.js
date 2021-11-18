import './index.css'

// Write your code here
const DenominationItem = props => {
  const {denomination, onclickValue} = props
  const {value} = denomination

  const clickingValue = () => {
    onclickValue(value)
  }

  return (
    <li>
      <button
        type="button"
        onClick={clickingValue}
        className="denomination-style"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
