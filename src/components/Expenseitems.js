import React from 'react'

const Expenseitems = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amount} = expense
  return <li> 
           <div className='md:flex border-2 py-5 mb-4 bg-[#1E2139]'> 
                 <div> 
                <span> {charge}  </span>
                <span> ${amount} </span>
            </div>

            <div> 
                <button aria-label='edit button'
                onClick={()=>handleEdit(id)} className='bg-blue-500'> edit  </button>
                <button aria-label='delete button' 
                  onClick={()=>handleDelete(id)}
                className='bg-red-400'> delete  </button>
          
            </div>
           </div>
        </li>



  
  
 
}

export default Expenseitems