import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import api from '../http-common'

const AppReducer = (state, action) => {
    //console.log(state,action);

    switch (action.type) {
        case 'ADD_Expense':{
            //Call http-common here
            api.insertExpense(action.payload)
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        } 
        case 'DELETE_Expense':{
            //Call http-common here
            api.deleteExpense(action.payload)
            return {
                ...state,
                expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)]   
            }
        }
        case 'SET_Budget':{
            //Call http-common here
            api.updateBudget(action.payload.id,action.payload.budget)

            return {
                ...state,
                budgetInfo: action.payload
            }; 
        }	
        default:
            return state
    }
}

export const AppContext = createContext()

export const AppProvider = (props) => {

    //Populate the initial state via mongo Here

    

    const initialState = {
	
        budgetInfo:{
            id: 1,
            budget: 2000
        },
        expenses: [
            { id: uuidv4(), name: 'Shopping', cost: 50 },
            { id: uuidv4(), name: 'Holiday', cost: 300 },
            { id: uuidv4(), name: 'Transportation', cost: 70 },
            { id: uuidv4(), name: 'Fuel', cost: 40 },
            { id: uuidv4(), name: 'Child Care', cost: 500 },
        ],
    };

    //console.log(initialState);
    
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
    <AppContext.Provider 
        value={{
            budget: state.budgetInfo,
            expenses: state.expenses,
            dispatch,

        }}
    > 
        {props.children}
    </AppContext.Provider>)
}