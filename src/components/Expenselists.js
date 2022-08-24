import React from 'react'
import Item from './Expenseitems'

const Expenselists = ({expenses,handleEdit, handleDelete,clearItems}) => {
  return (
   <>
        <ul> 
            {expenses.map ((expense)=> {
                return <Item key ={expense.id} expense={expense} 
                 handleDelete={handleDelete}
                 handleEdit={handleEdit}/>
            })}
        </ul>
        <div className='w-2/4 md:w-1/4 mx-auto flex  justify-center text-white  pt-4 '> 
                 {expenses.length>0 && <button className='  mb-4 text-lg bg-red-500 px-[20px] rounded-lg ' onClick={clearItems}> Delete All  </button>}
        </div>
       
   </>
  )
}

export default Expenselists