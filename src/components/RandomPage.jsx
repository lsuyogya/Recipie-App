import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import '../styles/RandomPage.scss';
import MealCard from './MealCard';

const RandomPage = () => {
	const { isLoading, data, refetch } = useQuery(
		'randomRecipie',
		() => {
			return axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
		},
		{ refetchOnWindowFocus: false }
	);

	// debugger;
	if (isLoading) return <h1>Loading...</h1>;
	return (
		<>
			<div className='card-container'>
				{data?.data.meals.map((meal) => {
					// debugger;
					return <MealCard meal={meal} key={meal.idMeal} />;
				})}
			</div>
			{/* <button style={{ marginTop: '20px' }} onClick={() => refetch()}>
				Random
			</button> */}
		</>
	);
};

export default RandomPage;
