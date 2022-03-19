import React from 'react'

const Convert = () => {

  // Strictly HTML and no React used here. Submits form to microservice to get the conversion
  // of bitcoin to a foreign currency such as GBP, EUR, or JPY.
  
  return (
    <div className='table-container'>
      <h1>Convert</h1>
      <form action="http://localhost:8488/convert" method='GET'>
        <h1 >Convert Bitcoin to Foreign Currency</h1>
        <label for="currency">Choose a Foreign Currency: </label>
        <select name="currency" id="currency">
                <option value="GBP" id="GBP">Pounds (GBP)</option>
                <option value="EUR" id="EUR">Euros (EUR)</option>
                <option value="JPY" id="JPY">Yen (JPY)</option>
        </select>
        <input type="hidden" value="41881.5" id="amount" name="amount" />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Convert