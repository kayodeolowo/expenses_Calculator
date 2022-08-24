import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import Expenselists from "./components/Expenselists";
import ExpenseForms from "./components/ExpenseForms";
import Alert from "./components/Alert";







const initialExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses')) : [];

function Home() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('');
   const [amount, setAmount] = useState('');
   const [alert, setAlert] = useState({show:false})
   const [edit, setEdit] = useState (false)
   const [id, setId] = useState(0)
   useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses))
   })
  const handleCharge =e =>{
    console.log(`charge:  ${e.target.value}`)
    setCharge(e.target.value)
  }

   const handleAmount =e =>{
     console.log(`amount:  ${e.target.value}`)
    setAmount(e.target.value)
   }

   const handleAlert = ({type,text}) =>{
    setAlert({show:true, type, text});
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
   }

   const handleSubmit =e =>{
    e.preventDefault();
    if(charge !== '' && amount >0 ){
      if(edit){
          let tempExpenses = expenses.map(item =>{
            return item.id === id?{...item,charge,amount} : item
          });
          setExpenses (tempExpenses)
          setEdit(false)
          handleAlert({type:'succes', text:"item edited"})
      }else {
           const singleExpense = {id:uuidv4(), charge, amount};
      setExpenses([...expenses, singleExpense]); //adds the new input 
      handleAlert({type:'succes', text:"Item added succesfully"})
      }
     
      setCharge(''); //clears up the form after submit
      setAmount('');

    }  else {
    
         handleAlert({type:'danger', text:"Please Fill the form properly" })
    }
  }

  // 
  const clearItems = () => {
    setExpenses([]);
    
  }

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(item=>item.id !==id)
    setExpenses(tempExpenses)
    handleAlert({id:"del", text:"Item deleted"})
  }

  const handleEdit = (id) => {
    let expense = expenses.find(item=> item.id === id)
    let {charge, amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }

  return <>
  {alert.show &&  <Alert type={alert.type} text={alert.text} />}
    <Alert/>
      <div className='w-3/4 mx-auto flex justify-center mb-2'>
             <h1 className=' text-slate-400'> Fill in your Expenses </h1>
        </div> 
     
      <main > 
        <ExpenseForms //passing props
        charge={charge} 
        amount={amount} 
        handleAmount={handleAmount}
         handleCharge={handleCharge} 
         handleSubmit={handleSubmit}
         edit={edit}/>

        <div className='w-3/5 md:w-1/4 mx-auto flex justify-center mt-8 text-white bg-green-600 rounded-lg '> 
           <h1 className='   py-2 '>Total: <span>  ${expenses.reduce((acc,curr)=>{
// totals the amount input
        return acc += parseInt(curr.amount)
      },0)}</span> </h1> 

      </div>
         
       
         <Expenselists 
        expenses={expenses}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        clearItems={clearItems}        /> 
        
      </main>

      
  </>
}

export default Home;
