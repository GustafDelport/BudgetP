import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    },0)
    

    const alertType = totalExpenses > budget.budget ? 'alert-danger' : 'alert-success';

    return(
        <div className={`alert p-4 ${alertType}`}>
            <span>
                Remaining: R{budget.budget - totalExpenses}
            </span>
        </div>
    )
}

export default Remaining