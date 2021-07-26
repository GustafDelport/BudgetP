import React, {useState,useContext} from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
	};

	

    const handleSaveClick = (value) => {
		const nwBudget = {
			id: 1,
			budget: value
		}

		dispatch({
			type: 'SET_Budget',
			payload: nwBudget,
		});
		setIsEditing(false);
	};

    return(
        <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget.budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget.budget} />
			)}
		</div>
    )
}

export default Budget