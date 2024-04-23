import "./App.css"
import { useState } from "react"

function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)

  function handleFirstNum(e) {
    if (firstNum === 0) {
      setFirstNum(e.target.textContent)
    } else {
      setFirstNum(firstNum + e.target.textContent)
    }
  }

  function handleSecondNum(e) {
    if (secondNum === 0) {
      setSecondNum(e.target.textContent)
    } else {
      setSecondNum(secondNum + e.target.textContent)
    }
  }

  function handleOperator(e) {
    setOperator(e.target.textContent)
  }

  function handleResetFirstNum() {
    setFirstNum(0)
  }

  function handleResetSecondNum() {
    setSecondNum(0)
  }

  function handleResult() {
    if (operator === '+') {
      setResult(Number(firstNum) + Number(secondNum))
    } else if (operator === '-') {
      setResult(firstNum - secondNum)
    } else if (operator === '*') {
      setResult(firstNum * secondNum)
    } else {
      setResult(firstNum / secondNum)
    } 
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={handleFirstNum}>1</button>
          <button onClick={handleFirstNum}>2</button>
          <button onClick={handleFirstNum}>3</button>
          <button onClick={handleFirstNum}>4</button>
          <button onClick={handleFirstNum}>5</button>
          <button onClick={handleFirstNum}>6</button>
          <button onClick={handleFirstNum}>7</button>
          <button onClick={handleFirstNum}>8</button>
          <button onClick={handleFirstNum}>9</button>
          <button onClick={handleFirstNum}>0</button>
          <button onClick={handleResetFirstNum}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperator}>+</button>
          <button onClick={handleOperator}>-</button>
          <button onClick={handleOperator}>*</button>
          <button onClick={handleOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={handleSecondNum}>1</button>
          <button onClick={handleSecondNum}>2</button>
          <button onClick={handleSecondNum}>3</button>
          <button onClick={handleSecondNum}>4</button>
          <button onClick={handleSecondNum}>5</button>
          <button onClick={handleSecondNum}>6</button>
          <button onClick={handleSecondNum}>7</button>
          <button onClick={handleSecondNum}>8</button>
          <button onClick={handleSecondNum}>9</button>
          <button onClick={handleSecondNum}>0</button>
          <button onClick={handleResetSecondNum}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleResult}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
