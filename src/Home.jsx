import React, { useState } from 'react'

function Home() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [result, setResult] = useState(0)
  console.log(amount)
  console.log(rate)
  console.log(year)

  const calculate = (e) =>{
    e.preventDefault()
    console.log((amount * rate * year)/100)
    setResult((amount * rate * year)/100)
  }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
        <div className='w-75 border shadow p-2'>
          <form action="" onSubmit={(e) => {calculate(e)}}>
            <input type="text" className="text form-control mb-3" onChange={(e) => {setAmount(e.target.value)}} placeholder='enter amount' />
            <input type="text" className="text form-control mb-3" onChange={(e) => {setRate(e.target.value)}} placeholder='Enter rate in %' />
            <input type="text" className="text form-control mb-3" onChange={(e) => {setYear(e.target.value)}} placeholder='Enter year' />
            <button type='reset' className='btn btn-info me-3'>Reset</button>
            <button className='btn btn-success'>Submit</button>
            </form>
            <div>
              Result:{result}
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Home