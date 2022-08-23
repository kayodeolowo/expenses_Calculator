import React from 'react'

const ExpenseForms = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full text-white "> 
       <div className='w-11/12 md:8/12 lg:w-7/12  mx-auto border-2'> 
               <div className=' md:flex  justify-between '> 
              <div >
              <div> 
                <label htmlFor='charge' className='bg-[#1E2139]'>
                      Services/Product
                </label>
                <input
                 maxLength={12} className='bg-[#1E2139]'   type="text" name='charge' placeholder='e.g Electricity'
                value={charge}
                onChange={handleCharge}
                /> 
              </div>
            </div>

            <div className='border-2 border-red-300 rounded-lg bg-[#1E2139]'>
              <div> 
                <label htmlFor='amount'>
                      Amount
                </label>
                <input maxLength={6} type="number" className='bg-[#1E2139] rounded-sm text-black '  name='amount' placeholder='e.g $200'
                  value={amount}
                onChange={handleAmount}
                
                /> 
              </div>
            </div>

            
            
        </div>
          <div className='flex justify-center mb-4'> 
                <button className='' type='submit'> {edit ? 'edit' : 'submit' } </button>
          </div>
       </div>
    </form>
  )
}

export default ExpenseForms