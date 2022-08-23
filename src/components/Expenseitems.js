import React from 'react'
import { FiEdit3 } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';


const Expenseitems = ({expense, handleEdit, handleDelete}) => {
    const {id, charge, amount} = expense
  return <li> 
           <div className='    w-full'> 
                <div className='w-11/12 md:w-11/12 lg:w-7/12  rounded-lg mb-4 text-white  mx-auto  bg-[#1E2139] md:flex md:justify-between   '> 
                   
                    <div className='pt-4 mb-4 mx-4 md:mx-[20px] lg:mx-[40px] flex md:grid-cols-2  justify-between   md:gap-[100px] lg:gap-[150px]'> 
                      <span className=' max-w-20 w-[100px]  text-[1.4rem] md:text-[1.2rem]'> {charge}  </span>
                      <span className='max-w-20  w-[100px]  pl-4 md:pl-0 text-[1.4rem] md:text-[1.2rem]'> $ { amount} </span>
                    </div>

                  <div className='pt-4 mb-4 mx-4 lg:mx-[100px] md:mx-[50px] flex justify-between md:grid-cols-2 md:gap-[150px]  '> 
                      <button aria-label='edit button'
                      onClick={()=>handleEdit(id)} className='text-[1.3rem] max-w-20 w-[100px] md:w-[20px] text-green-600 mb-4'> <FiEdit3/>  </button>
                      <button  aria-label='delete button' 
                        onClick={()=>handleDelete(id)}
                      className='text-[1.4rem]  text-red-600 mb-4 max-w-20 pl-8 md:pl-0 w-[100px] '> <MdDeleteForever/>  </button>
                
                  </div>
                </div>
           </div>
        </li>





  
  
 
}

export default Expenseitems