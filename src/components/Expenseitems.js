import React from 'react'
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';


const Expenseitems = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amount} = expense
  return <li> 
           <div className='    w-full'> 
                <div className='w-11/12 md:8/12 lg:w-7/12  rounded-lg mb-4 text-white  mx-auto  bg-[#1E2139] grid grid-cols-2 md:gap-40 py-4 '> 
                   
                    <div className='flex justify-between flex-col md:flex-row ml-4'> 
                      <span className=' border-2 w-[180px]  '> {charge}  </span>
                      <span className='border-2 w-[180px] mt-4 md:mt-0'> ${amount} </span>
                    </div>

                  <div className='flex justify-between flex-col items-end md:items-start md:flex-row mx-4 '> 
                      <button aria-label='edit button'
                      onClick={()=>handleEdit(id)} className='md:w-[180px] md:text-[1.5rem] text-green-500'> <FiEdit3/>  </button>


                      <button  aria-label='delete button' 
                        onClick={()=>handleDelete(id)}
                      className='md:w-[180px] border-2 flex justify-end text-[#BA0A11] md:text-[1.5rem]'> <MdDeleteForever/>  </button>
                
                  </div>
                </div>
           </div>
        </li>





  
  
 
}

export default Expenseitems