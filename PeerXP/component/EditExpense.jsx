import { useState } from "react";

function EditExpense({closeModal,index,expenses, setExpenses}) {
    const options = ["Health", "Electronics", "Travel", "Education", "Books", "Others"];
    const [selectedOption, setSelectedOption] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState();

    const handleEditExpense = (event) => {
      event.preventDefault();
        // Validate the input data, you can add more validation as needed
        
        const currentTime = new Date();

        const hour = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const second = currentTime.getSeconds();

        const uploadedAt=`${hour}:${minute}:${second}`;
        const createdBy="Me";

        expenses.forEach((element,i) => {
            if(i==index){
                if(name.length>0 && name!='' )
                    element.name=name;
                if(category.length>0 && category!='' )
                    element.category=selectedOption;
                if(description.length>0 && description!='' )
                    element.description=description;
                if(amount!='' )
                    element.amount=amount;
                if(date.length>0 && date!='' )
                    element.date=date;
                
                element.uploadedAt=uploadedAt;
            }
        });

        setExpenses(expenses);
        closeModal();
      };
    
    // Event handler to update the selected option
    
    return(
      <>
        <div className='w-full max-w-md mx-auto shadow- px-3 py-3 my-10 bg-blue-100'>
          <div>
            <h1 className='font-bold '>Edit New Expnese</h1>
          </div>
          <div>
            <label>Name</label><br />
            <input className='pl-5 mb-2 w-full' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name the Expnese' /><br />
            <label>Description</label><br />
            <input className='pl-5 mb-2 w-full' type="text" value={description} placeholder='Descibe the Expense' onChange={(e)=>{setDescription(e.target.value)}} /><br />
            <label>Category</label><br />
            <select id="category" className='mb-2 w-full' value={selectedOption} onChange={(event) => {setSelectedOption(event.target.value)}}>
              <option value="">Select an option</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select><br />
            <label>Date of Expense</label><br />
            <input className='pl-5 mb-2 w-full' type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} /><br />
            <label>Expense Amount</label><br />
            <input className='pl-5 mb-2 w-full' type="number" onChange={(e)=>{setAmount(e.target.value)}} placeholder='Enter Amount in INR'/><br />
          </div>
          <div className='flex justify-between mt-5'>
            <button className='bg-gray-400 px-2 py-1 text-white-200 w-1/3 text-sm' onClick={closeModal} >Cancel</button>
            <button className='bg-green-600 px-2 text-slate-200 w-1/2.5 text-sm' onClick={handleEditExpense}>Create Expense</button>
          </div>
        </div>
      </>
    )
    
  }

  export default EditExpense;