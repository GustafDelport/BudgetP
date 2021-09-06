import React, { createContext, useReducer } from "react";
import api from '../http-common'

const AppReducer = (state, action) => {
    //console.log(state,action);

    switch (action.type) {
        case 'ADD_Expense':{
            api.insertExpense(action.payload)
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        } 
        case 'DELETE_Expense':{
            api.deleteExpense(action.payload)
            return {
                ...state,
                expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)]   
            }
        }
        case 'SET_Budget':{
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

function PopulateInitial() {
        return new Promise((resolve, reject) => {
            api.getAllExpenses()
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        }
    )
}

function PopulateInitialBudget() {
    return new Promise((resolve, reject) => {
        api.getBudget()
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    }
)
}

function popIni() {
    let initialState  = {
        budgetInfo: popB(),
        expenses: popE(),
    };

    return initialState;
}

function popE() {
    let ex = []
        PopulateInitial().then((data) => {
            data.forEach(element => {
                ex.push(element)
            });
        })
    return ex
}

function popB() {
    let B = {
        id: 1,
        budget:0
    }
    PopulateInitialBudget().then((data) => {
        B.id = data[0].id
        B.budget = data[0].budget
    })
    return B
}

export const AppProvider = (props) => {

    //Populate the initial state via mongo Here


    
    const [state, dispatch] = useReducer(AppReducer, popIni());

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