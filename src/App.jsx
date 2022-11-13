import { useState } from 'react';
import './App.css';
import Form from './components/SearchForm';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
	// const baseUrl = process.env.REACT_APP_BASEURL;
	// console.log(baseUrl);
	const { isLoading, data, error, refetch } = useQuery('randomRecipie', () => {
		return axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
		// ,			{ enabled: false }
	});
	// refetch();
	if (isLoading) return <h1>Loading...</h1>;

	return (
		<div className='App'>
			<Form></Form>
			<div>
				debugger;
				{data?.data.meals.map((meal) => {
					return (
						<div class='card'>
							<img src={meal.strMealThumb} alt='Image not available' />
							<span>Meal ID: {meal.idMeal}</span>
							<span>Meal {meal.strMeal}</span>
							<span>{meal.strCategory}</span>
							<span>{meal.strCategory}</span>
						</div>
					);
				})}
				<button onClick={() => refetch()}>Random</button>
			</div>
		</div>
	);
}

export default App;
