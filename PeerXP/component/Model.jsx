import React, { useState } from 'react';
import NewExpense from './NewExpense';
import EditExpense from './EditExpense';
import DeleteExpense from './DeleteExpense';

function ModalForNewExpense({closeModal,expenses, setExpenses}) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden bg-transparent text-left  border-solid border-0 
                    border-slate-950  transition-all sm:my-8 sm:w-full sm:max-w-lg w-full max-w-screen">
                        <div className="">
                        <div className="sm:flex sm:items-start">
                            {<NewExpense closeModal={closeModal} expenses={expenses} setExpenses={setExpenses}/>}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModalForEdit({closeModal,index,expenses, setExpenses}) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden bg-transparent text-left  border-solid border-0 
                    border-slate-950  transition-all sm:my-8 sm:w-full sm:max-w-lg w-full max-w-screen">
                        <div className="">
                        <div className="sm:flex sm:items-start">
                            {<EditExpense closeModal={closeModal} index={index} expenses={expenses} setExpenses={setExpenses}/>}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function ModalForDelete({closeModal,index,expenses,setExpenses}) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden bg-transparent text-left  border-solid border-0 
                    border-slate-950  transition-all sm:my-8 sm:w-full sm:max-w-lg w-full max-w-screen">
                        <div className="">
                        <div className="sm:flex sm:items-start">
                            {<DeleteExpense closeModal={closeModal} index={index} expenses={expenses} setExpenses={setExpenses}/>}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export  {ModalForNewExpense,ModalForEdit,ModalForDelete};   
