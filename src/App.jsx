import "./App.css"
import { useState } from "react"
import FirstNumPanel from "./FirstNumPanel"
import OperatorPanel from "./OperatorPanel"
import SecondNumPanel from "./SecondNumPanel"
import ResultPanel from "./ResultPanel"

function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(0)
  const [store, setStore] = useState(0)

  function handleFirstNum(e) {
    if (e.target.textContent === '.' && firstNum.toString().includes('.')) return
  
    if (firstNum === 0 || firstNum === '0') {
      setFirstNum(e.target.textContent)
    } else {
      setFirstNum(firstNum + e.target.textContent)
    }
  }

  function handleSecondNum(e) {
    if (e.target.textContent === '.' && secondNum.toString().includes('.')) return
  
    if (secondNum === 0 || secondNum === '0') {
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
      <FirstNumPanel
        firstNum={firstNum}
        handleFirstNum={handleFirstNum}
        handleResetFirstNum={handleResetFirstNum}
        handleFirstNumRecall={handleFirstNumRecall}
      />

      <OperatorPanel
        operator={operator}
        handleOperator={handleOperator}
      />

      <SecondNumPanel
        secondNum={secondNum}
        handleSecondNum={handleSecondNum}
        handleResetSecondNum={handleResetSecondNum}
        handleSecondNumRecall={handleSecondNumRecall}
      />

      <ResultPanel
        result={result}
        handleResult={handleResult}
        handleStore={handleStore}
      />
    </div>
  )
}

export default App
