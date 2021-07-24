import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_Expense':{
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        } 
        case 'DELETE_Expense':{
            return {
                ...state,
                expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)]
            }
        } 
        default:
            return state
    }
}

const initialState = {
    budget: 2500,
    expenses: [
        {
            id: 1,
            name: "Shopping",
            cost: 25
        },
        {
            id: 2,
            name: "Fuel",
            cost: 125
        },
        {
            id: 3,
            name: "Medical",
            cost: 300
        }

    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
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