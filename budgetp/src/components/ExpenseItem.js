import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
import {TiDelete} from 'react-icons/ti'

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_Expense',
            payload: props.id
        })
    }

    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className="label label-primary mr-3">
                    R{props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem