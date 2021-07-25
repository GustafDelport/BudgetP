import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import api from '../http-common'

const AppReducer = (state, action) => {
    console.log(state,action);

    switch (action.type) {
        case 'ADD_Expense':{
            //Call http-common here
            //api.insertExpense(action.payload)
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        } 
        case 'DELETE_Expense':{
            //Call http-common here
            //api.deleteExpense(action.id)
            return {
                ...state,
                expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)]   
            }
        }
        case 'SET_Budget':{
            //Call http-common here
            //api.updateBudget(action.id,action.payload)
            return {
                ...state,
                budget: action.payload
            }; 
        }	
        default:
            return state
    }
}

const initialState = {
	budget: 2000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
		{ id: uuidv4(), name: 'Transportation', cost: 70 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
	],
};

export const AppContext = createContext()

export const AppProvider = (props) => {

    //Populate the initial state via mongo Here
    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
    
    <AppContext.Provider 
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,

        }}
    > 
        {props.children}
    </AppContext.Provider>)
}