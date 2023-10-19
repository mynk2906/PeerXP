import React, { useState } from 'react';
import {ModalForNewExpense,ModalForEdit,ModalForDelete} from "./Model";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const data = [
    { name: "AAA1" },
    { name: "AAA2" },
    { name: "AAA2" },
    { name: "AAA2" },
    { name: "AAA2" },
    { name: "AAA2" },
  ];

  const [expenses, setExpenses] = useState(data);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = expenses.slice(startIndex, endIndex);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // ********* New Expense ******
  const [isModalOpenNewExpense, setIsModalOpenNewExpense] = useState(false);
  const openModalNewExpense = () => {
    setIsModalOpenNewExpense(true);
  };
  const closeModalNewExpense = () => {
    setIsModalOpenNewExpense(false);
  };
  //

  // ********* Edit Expense *******
  const [isModalOpenEditExpense, setIsModalOpenEditExpense] = useState(false);
  const [editExpenseIndex, setEditExpenseIndex] = useState(null);
  const openModalEditExpense=(index)=>{
    setIsModalOpenEditExpense(true);
    setEditExpenseIndex(index);
  }
  const closeModalEditExpense=()=>{
    setIsModalOpenEditExpense(false);
    setEditExpenseIndex(null);

  }
  //

  //******* Delete Expense ***
  const [isModalOpenDeleteExpense, setIsModalOpenDeleteExpense] = useState(false);
  const [deleteExpenseIndex, setdeleteExpenseIndex] = useState(null);
  const openModalDeleteExpense=(index)=>{
    setIsModalOpenDeleteExpense(true);
    setdeleteExpenseIndex(index);
  }
  const closeModalDeleteExpense=()=>{
    setIsModalOpenDeleteExpense(false);
    setdeleteExpenseIndex(null);

  }
  //

  //filter by date
  const [filterByDate,setFilterByDate]=useState('');
  function appendFilterByDate(event){
    const search = event.target.value;
    setFilterByDate(search);
    const newExpenses = expenses.filter((element) => {
      if (element.date && typeof element.date === 'string') {
        return element.date.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    // console.log("New expenses: ", newExpenses);
    setExpenses(newExpenses);
  }
  
  //filter by name
  const [filterByName,setFilterByName]=useState('');
  function appendFilterbyName(event){
    const search = event.target.value;
    setFilterByName(search);
    const newExpenses = expenses.filter((element) => {
        return element.name.toLowerCase().includes(search.toLowerCase());
    });

    // console.log("New expenses: ", newExpenses);
    setExpenses(newExpenses);
  }
  

  return (
    <>
      <div className="w-full max-w-5xl mx-auto shadow-md rounded-lg px-3 py-3 my-10 border-solid border-2 border-slate-950 bg-blue-100">
        {/* first div */}
        <div className="w-full flex justify-between">
          <div className="">
            <h1 className="font-bold text-lg">MY EXPENSE MANAGER</h1>
          </div>
          <div className="flex justify-between">
            <input
              type="date"
              className="border-solid border-2 border-slate-950 bg-transparent px-2"
              placeholder="Filter by Date of Expense"
              value={filterByDate}
              onChange={appendFilterByDate}
            />
            <input
              type="text"
              className="border-solid border-2 border-slate-950 bg-transparent px-2 "
              placeholder="Search Expense by Name"
              value={filterByName}
              onChange={appendFilterbyName}
            />
            <button className="bg-green-600 px-2 text-slate-200" onClick={openModalNewExpense}>
              + New Expense
            </button>
            {isModalOpenNewExpense && <ModalForNewExpense closeModal={closeModalNewExpense} expenses={expenses} setExpenses={setExpenses} />}
          </div>
        </div>
        {/* first div close */}

        {/* Here we append the data */}
        <div className="border-solid border-2 border-slate-700 rounded-md mt-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700">Name</th>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700">Category</th>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700">Date of Expense</th>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700">Amount</th>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700">Updated At</th>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700">Created by</th>
                <th className="px-6 py-4 text-sm text-left font-medium bg-gray-400 border border-slate-700"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    {item.uploadedAt}
                  </td>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    {item.createdBy}
                  </td>
                  <td className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap border border-slate-700">
                    <div className="flex justify-between">
                      <button className="hover:bg-slate-200" onClick={() => openModalEditExpense(index)}>
                        <i className="fas fa-pen"></i>
                      </button>
                      {isModalOpenEditExpense && <ModalForEdit closeModal={closeModalEditExpense} index={editExpenseIndex} expenses={expenses} setExpenses={setExpenses}/>}
                      <button className="text-red-500 hover:bg-red-100" onClick={() => openModalDeleteExpense(index)}>
                        <i className="fas fa-trash"></i>
                      </button>
                      {isModalOpenDeleteExpense && <ModalForDelete closeModal={closeModalDeleteExpense} index={deleteExpenseIndex} expenses={expenses} setExpenses={setExpenses}/>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="mt-3 flex justify-end">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-5 py-3 mx-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border border-blue-500"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
