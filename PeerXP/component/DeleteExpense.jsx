
function DeleteExpense({closeModal,index,expenses, setExpenses}) {
    const handleDeleteExpense = (event) => {
      event.preventDefault();

        // Call the addNewExpense function with the new expense data
        expenses=expenses.filter((item,i)=>i!=index);

        setExpenses(expenses);
        closeModal();
      };
    
    // Event handler to update the selected option
    
    return(
      <>
        <div className='w-full max-w-md mx-auto shadow- px-3 py-3 my-10 bg-blue-100'>
          <div>
            <h1 className='font-bold '>Are you sure you want to delete this expense</h1>
          </div>
          
          <div className='flex justify-between mt-5'>
            <button className='bg-red-700 px-2 py-1 text-white-200 w-1/3 text-sm' onClick={closeModal} >No</button>
            <button className='bg-green-600 px-2 text-slate-200 w-1/2.5 text-sm' onClick={handleDeleteExpense}>Yes, Delete!</button>
          </div>
        </div>
      </>
    )
    
  }

  export default DeleteExpense;