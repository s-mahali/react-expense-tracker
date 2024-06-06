import React, { useState } from 'react'


const Homepage = () => {

    const[input,setInput]=useState()
    const[amount,setAmount]=useState()
    const[expenses,setExpenses]=useState([])

const addExpense = ()=> {
    if(!input || !amount)
        return;
    
    const newExpense={
        id: expenses.length,
        title: input,
        amount: amount

    };
setExpenses([...expenses,newExpense])
setInput('')
setAmount('')
}

const deleteExpense = (id) => {
setExpenses(expenses.filter((expenses)=> expenses.id !==id))

}


  return (
    <>
    <div className="container">
<h1>Expense Tracker</h1>
<div className="inputitem">
    <input type='text' placeholder='expense' value = {input} onChange={(e)=> setInput(e.target.value)}></input>
    <input type='number' placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}></input>
<button onClick={addExpense}>Add Expense</button>
</div>

<ul className='expense-list'>
   {
    expenses.map((expense)=>(

       <li key ={expense.id}>
       <span>{expense.title}
       </span>
       <span>{expense.amount}</span>


<button onClick={()=> deleteExpense(expense.id)}>Delete</button>

       </li> 
    ))
   }
</ul>
</div>

    </>
  )
}

export default Homepage