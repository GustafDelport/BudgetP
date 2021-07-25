
const express = require('express')
const ExpenseData = require('../models/expenses')
const BudgetData = require('../models/budget')

const router = express.Router()

//Get Endpoints
//======================================================================================
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

//Delete Endpoint
//======================================================================================
router.delete('/DeleteExpense/:id', async (req,res) => {
    try {
        await ExpenseData.findOneAndDelete({id: req.params.id}, (err,expense) => {
            if(err) {
                return res.status(400).json({ success: false, error: err })
            }

            if(!expense){
                return res
                .status(404)
                .json({ success: false, error: `Expense not found` })
            }

            return res.status(200).json({ success: true, data: expense })
        }).catch(err => console.log(err))
    } 
    catch (error) {
         res.status(500).json({ message: error.message})
    }
})

//Put Endpoint
//======================================================================================
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

//Post Endpoint
//======================================================================================
router.post('/AddExpense', async (req,res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to insert',
        })
    }
    else{
        //Insert here
    }
})
//======================================================================================


module.exports = router