import React from 'react'

const ExpenseForms = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full text-white "> 
       <div className='w-11/12 md:8/12 lg:w-7/12  mx-auto  rounded-lg bg-[#1E2139] shadow-lg  shadow-blue-500/50'> 
               <div className='md:flex   md:justify-between'> 
              <div className='mt-4 pt-4 md:pt-0 mx-4  '>


              <div className=' mt-4 md:mt-0 flex justify-between'> 
                <label htmlFor='charge' className='bg-[#1E2139] text-[15px]  mt-2'>
                      Products
                </label>
                <input
                required
                 maxLength={12} className='bg-[#1E2139] md:ml-4 rounded-lg border-2 border-blue-500 py-2 text-[13px] pl-2 md:py-0'   type="text" name='charge' placeholder='e.g Electricity'
                value={charge}
                onChange={handleCharge}
                /> 
              </div>
            </div> 

            <div className=' mx-4 rounded-lg bg-[#1E2139] mt-4'>
              <div className='flex justify-between'> 
                <label htmlFor='amount' className='text-[15px] mt-2'>
                      Amount
                </label>
                <input
                required maxLength={6} type="number" className='bg-[#1E2139] rounded-lg border-2 border-blue-500 py-2 md:py-0 text-[13px] pl-2   md:ml-4 '  name='amount' placeholder='e.g $200'
                  value={amount}
                onChange={handleAmount}
                
                /> 
              </div>
            </div>

            
            
        </div>
          <div className='flex justify-center mb-4'> 
                <button className=' rounded-lg bg-red-600 px-4 py-0.5 mt-4 mb-4' type='submit'> {edit ? 'Edit' : 'submit' } </button>
          </div>
       </div>
    </form>
  )
}

export default ExpenseForms