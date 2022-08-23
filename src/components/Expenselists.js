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
        {expenses.length>0 && <button onClick={clearItems}> clear  </button>}
   </>
  )
}

export default Expenselists