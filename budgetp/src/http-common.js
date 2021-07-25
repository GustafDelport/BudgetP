import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-type" : "application/json"
    }
})

export const insertExpense = payload => api.post(`/AddExpense`, payload)
export const getAllExpenses = () => api.get(`/expensesAll`)
export const getBudget = () => api.get(`/budgetAll`)
export const updateBudget = (id, payload) => api.put(`/UpdateBudget/${id}`, payload)
export const deleteExpense = id => api.delete(`/DeleteExpense/${id}`)

const apis = {
    insertExpense,
    getAllExpenses,
    getBudget,
    updateBudget,
    deleteExpense,
}

export default apis

