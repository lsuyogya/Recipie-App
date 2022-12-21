import React from 'react';
import MealCard from 'components/MealCard';

const MealCardContainer = ({ data }) => {
	return (
		<div className='card-container'>
			{data?.data.meals?.map((meal) => {
				return <MealCard meal={meal} key={meal.idMeal} />;
			})}
		</div>
	);
};

export default MealCardContainer;
