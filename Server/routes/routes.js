
const express = require('express')
const ExpenseData = require('../models/expenses')
const BudgetData = require('../models/budget')

const router = express.Router()

router.get('/expensesAll',async (req,res) => {

    try {
         const Data = await ExpenseData.find()
         res.json(Data)
    } 
    catch (error) {
         res.status(500).json({ message: error.message})
    }
})

router.get('/budgetAll',async (req,res) => {

    try {
         const Data = await BudgetData.find()
         res.json(Data)
    } 
    catch (error) {
         res.status(500).json({ message: error.message})
    }
})

router.put('/UpdateBudget/:id', async (req,res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    else{
        BudgetData.findOne({_id: req.params.id},(err,budget) => {
            if(err) {
                return res.status(404).json({
                    err,
                    message: 'Budget not found!',
                })
            }

            budget.budget = body.budget
            budget.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: budget._id,
                    message: 'Budget updated!',
                })
            })
            .catch( err => {
                return res.status(404).json({
                    error,
                    message: 'Budget not updated!',
                })
            })
        })
    }
})

module.exports = router