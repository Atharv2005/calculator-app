import { useState } from 'react'

function App() {
  const [displayOperads, setDisplayOperands] = useState(0)
  const [operand1, setOperand1] = useState(null)
  const [operand2, setOperand2] = useState(null)
  const [operator, setOperator] = useState(null)

  const handleButtonClick = (value) => {
    console.log(value)
    setDisplayOperands(value)
  }
  return (
    <div>
      <div>
        <input type='text' value={displayOperads} disabled />
      </div>

      <div>
        <button value="7" onClick={() => handleButtonClick("7")}> 7 </button >
        <button value="8" onClick={() => handleButtonClick("8")}> 8</button >
        <button value="9"> 9</button >
      </div>

      <div>
        <button value="4" > 4</button >
        <button value="5"> 5</button >
        <button value="6"> 6</button >
      </div>

      <div>
        <button value="1" > 1</button >
        <button value="2"> 2</button >
        <button value="3"> 3</button >
      </div>

      <div>
        <button value="+" > +</button >
        <button value="-"> -</button >
        <button value="*"> X</button >
        <button value="/" > 1</button >
      </div>


    </div>
  )
}

export default App
