import React, { useState } from 'react';
import '../styles/Card.scss';

const MealCard = ({ meal }) => {
	const handleClick = (e) => {
		e.preventDefault;
	};
	return (
		<>
			<div className='card'>
				<img
					src={meal.strMealThumb}
					alt='Image not available'
					loading='lazy'
					// height='400px'
					// width='400px'
				/>
				<div className='meal-name'>{meal.strMeal}</div>
				<div className='detail-table'>
					<div className='col1'>
						{/* <div className='meal-key' style={{ fontSize: '2.8rem' }}>
							Name{' '}
						</div> */}
						<div className='meal-key'>Origin </div>
						<div className='meal-key'>Category </div>
						<div className='meal-key'>Tags </div>
						<div className='meal-key'>ID </div>
					</div>
					<div className='col2'>
						{/* <div>{meal.strMeal}</div> */}
						<div>{meal.strArea}</div>
						<div>{meal.strCategory}</div>
						<div>{meal.strTags || 'none'}</div>
						<div>{meal.idMeal}</div>
					</div>
				</div>

				{/* {buttonState === 'Hide More' && ( */}
				<>
					<h1 className='title'>Ingredients</h1>
					<div className='detail-table'>
						<div className='col1'>
							{Object.keys(meal).map((mealKey) => {
								if (mealKey.includes('Ingredient'))
									return (
										<div className='meal-key' key={mealKey}>
											{meal[mealKey]}
										</div>
									);
							})}
						</div>

						<div className='col2'>
							{Object.keys(meal).map((mealKey) => {
								if (mealKey.includes('Measure')) {
									return (
										<div className='meal-value' key={mealKey}>
											{meal[mealKey]}
										</div>
									);
								}
							})}
						</div>
					</div>
					{/* <h1>Instructions</h1> */}
					{/* <div className='col1'>{meal.strInstructions}</div> */}
				</>
				{/* )} */}
				<button onClick={handleClick}>More Information</button>
			</div>
		</>
	);
};

export default MealCard;
