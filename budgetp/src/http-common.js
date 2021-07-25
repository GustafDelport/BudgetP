import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-type" : "application/json"
    }
});

// const api = axios.create({
//     baseURL: 'http://localhost:3000/',
//     headers: {
//         "Content-type" : "application/json"
//     }
// })

// export const UpdateBudget = (id, payload) => api.put(`/UpdateBudget/:${id}`,payload)
// export const GetBudget = () => api.get('/budgetAll')
// export const GetExpenses = () => api.get('/expensesAll')
// export const DeleteExpense = (id) => api.get(`/DeleteExpense/:${id}`)

// const apis = {
//     UpdateBudget,
//     GetBudget,
//     GetExpenses,
//     DeleteExpense,
// }

// export default apis;
