import "./App.css"
import { useState } from "react"

function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)
  const [store, setStore] = useState(0)

  function handleFirstNum(e) {
    if (firstNum === 0) {
      setFirstNum(e.target.textContent)
    } else if (firstNum > 0) {
      setFirstNum(firstNum + e.target.textContent)
    } else {
      setFirstNum(0)
    }
  }

  function handleSecondNum(e) {
    if (secondNum === 0) {
      setSecondNum(e.target.textContent)
    } else if (secondNum > 0) {
      setSecondNum(secondNum + e.target.textContent)
    } else {
      setSecondNum(0)
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

  function handleStore() {
    setStore(result)
  }

  function handleFirstNumRecall() {
    setFirstNum(store)
  }

  function handleSecondNumRecall() {
    setSecondNum(store)
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
          <button onClick={handleFirstNumRecall}>Recall</button>
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
          <button onClick={handleSecondNumRecall}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>

        <div>
          <button onClick={handleResult}>=</button>
        </div>

        <div>
          <button onClick={handleStore}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
