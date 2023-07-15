import { useState } from 'react'

function App() {
  const [displayOperads, setDisplayOperands] = useState(0)
  const [operand1, setOperand1] = useState(null)
  const [operand2, setOperand2] = useState(null)
  const [operator, setOperator] = useState(null)

  const handleButtonClick = (value) => {
    console.log(value)
    setDisplayOperands((previosValue) => previosValue + value)
    console.log(typeof (value))
    // Clear value

    if (value === "C") {
      setDisplayOperands("")
      setOperator(null)
      setOperand1(null)
      setOperand2(null)
      return
    }

    if (value === "Backspace") {
      setDisplayOperands((previosValue) => previosValue - value)

    }

    // setting operators
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value)
      console.log(operator)
    }

  }
  return (
    <div>
      <div>
        <input type='text' value={displayOperads} disabled />
      </div>

      <div>
        <button value="7" onClick={() => handleButtonClick(+"7")}> 7 </button >
        <button value="8" onClick={() => handleButtonClick(+"8")}> 8</button >
        <button value="9" onClick={() => handleButtonClick(+"9")}> 9</button >
      </div>

      <div>
        <button value="4" onClick={() => handleButtonClick(+"4")}> 4</button >
        <button value="5" onClick={() => handleButtonClick(+"5")}> 5</button >
        <button value="6" onClick={() => handleButtonClick(+"6")}> 6</button >
      </div>

      <div>
        <button value="1" onClick={() => handleButtonClick(+"1")} > 1</button >
        <button value="2" onClick={() => handleButtonClick(+"2")}> 2</button >
        <button value="3" onClick={() => handleButtonClick(+"3")}> 3</button >
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
