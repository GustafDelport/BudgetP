import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: R{props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;