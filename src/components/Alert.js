import React from 'react'

const Alert = ({type, text}) => {
  return (
   <div className='text-black w-3/5 mx-auto justify-center mt-8 bg-green-500 text-center rounded-lg px-2 text-sm font-semibold '> 
         <div className={`alert alert-${type}`}> {text}

    </div>
   </div>
  )
}

export default Alert