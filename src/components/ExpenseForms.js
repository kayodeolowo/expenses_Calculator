import React from 'react'

const ExpenseForms = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit}> 
      <div>
        <div> 
           <label htmlFor='charge'>
                Service/Product
           </label>
           <input className='border-2' type="text" name='charge' placeholder='e.g rent'
           value={charge}
           onChange={handleCharge}/> 
        </div>
      </div>

       <div>
        <div> 
           <label htmlFor='amount'>
                amount
           </label>
           <input className='border-2' type="number" name='amount' placeholder='e.g $200'
            value={amount}
           onChange={handleAmount}/> 
        </div>
      </div>
      <button type='submit'> {edit ? 'edit' : 'submit' } </button>
    </form>
  )
}

export default ExpenseForms