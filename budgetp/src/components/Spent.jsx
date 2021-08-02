import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const {expenses} = useContext(AppContext)

    const totalSpent= expenses.reduce((total, item) => {
        return (total += item.cost)
    },0)
    

    return(
        <div className='alert alert-primary p-4'>
            <span>
            Spent so far: R{totalSpent}
            </span>
        </div>
    )
}

export default Spent