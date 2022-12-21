import React, { useState } from 'react';
import 'styles/card.scss';
import { useNavigate } from 'react-router-dom';

const MealCard = ({ meal, short = false }) => {
	const nav = useNavigate();
	const handleClick = (e) => {
		e.preventDefault;
		nav(`/meal/${meal.idMeal}`);
	};
	return (
		<>
			<div className='card'>
				<img
					src={meal.strMealThumb}
					alt='Image not available'
					loading='lazy'
					className='loading'
				/>
				<div className='meal-name center'>{meal.strMeal}</div>
				{short ? (
					<></>
				) : (
					<div className='detail-table'>
						<div className='col1'>
							<div className='meal-key'>Origin </div>
							<div className='meal-key'>Category </div>
							<div className='meal-key'>Tags </div>
							<div className='meal-key'>ID </div>
						</div>
						<div className='col2'>
							<div>{meal.strArea?.replaceAll(',', ', ')}</div>
							<div>{meal.strCategory?.replaceAll(',', ', ')}</div>
							<div>{meal.strTags?.replaceAll(',', ', ') || 'none'}</div>
							<div>{meal.idMeal?.replaceAll(',', ', ')}</div>
						</div>
					</div>
				)}

				<button onClick={handleClick}>More Information</button>
			</div>
		</>
	);
};

export default MealCard;
