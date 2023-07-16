import { useState, useEffect } from 'react'

function App() {
  const [displayOperads, setDisplayOperands] = useState("")
  const [operand1, setOperand1] = useState(null)
  const [operand2, setOperand2] = useState(null)
  const [operator, setOperator] = useState(null)

  const handleButtonClick = (value) => {
    setDisplayOperands((previosValue) => previosValue + value)
    // console.log(typeof (value))
    // Clear value

    if (value === "C") {
      setDisplayOperands("")
      setOperator(null)
      setOperand1(null)
      setOperand2(null)
      return
    }
    // setting operators
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value)
    }

    if (operator === null && displayOperads !== null) {
      setOperand1(parseFloat(displayOperads))
    }

    if (operand1 !== null && operator !== null) {
      setOperand2(displayOperads)
    }

  }

  useEffect(() => {
    console.log("this is operand 1 " + operand1)
    console.log("this is operand2 " + operand2)
  }, [operand1, operand2])

  return (
    <div>
      <div>
        <input type='text' value={displayOperads} disabled />
      </div>

      <div>
        <button value="7" onClick={() => handleButtonClick("7")}> 7 </button >
        <button value="8" onClick={() => handleButtonClick("8")}> 8</button >
        <button value="9" onClick={() => handleButtonClick("9")}> 9</button >
      </div>

      <div>
        <button value="4" onClick={() => handleButtonClick("4")}> 4</button >
        <button value="5" onClick={() => handleButtonClick("5")}> 5</button >
        <button value="6" onClick={() => handleButtonClick("6")}> 6</button >
      </div>

      <div>
        <button value="1" onClick={() => handleButtonClick("1")} > 1</button >
        <button value="2" onClick={() => handleButtonClick("2")}> 2</button >
        <button value="3" onClick={() => handleButtonClick("3")}> 3</button >
      </div>

      <div>
        <button value="+" onClick={() => handleButtonClick("+")}> +</button >
        <button value="-" onClick={() => handleButtonClick("-")}> -</button >
        <button value="*" onClick={() => handleButtonClick("*")}> X</button >
        <button value="/" onClick={() => handleButtonClick("/")}>/</button >
        <button value="C" onClick={() => handleButtonClick("C")}> C</button >
        <button value="C" onClick={() => handleButtonClick("")}> =</button >
      </div>


    </div >
  )
}

export default App
