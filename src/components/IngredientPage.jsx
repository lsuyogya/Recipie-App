import '../styles/HomePage.scss';
import '../styles/card.scss';
import React, { useEffect, useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { getIngredients, getSearchIngredient } from '../apis/GetRecipie';
import Searchbar from './Searchbar';
import Loader from './Loader';
import MealCard from './MealCard';
import { useRef } from 'react';

const IngredientPage = () => {
	const [searchString, setSearchString] = useState(undefined);
	const searchRef = useRef(2);
	const randomQueryOptions = {
		queryFn: getIngredients,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	};

	const results = useQuery({
		queryKey: ['getIngredientData'],
		...randomQueryOptions,
	});

	console.log(results);
	const searchQueryOptions = {
		queryFn: () => getSearchIngredient(searchString),
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	};

	const searchResult = useQuery({
		queryKey: ['searchIngredientData', searchString],
		...searchQueryOptions,
		enabled: !!searchString,
	});

	const handleSearch = (e) => {
		setSearchString(e.target.value);
	};
	const handleSearchClick = (searchString) => {
		searchRef.current.value = searchString;
		setSearchString(searchString);
	};
	const handleClear = () => {
		searchRef.current.value = '';
		setSearchString('');
	};

	const debounce = (callback, delay) => {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				callback(...args);
			}, delay);
		};
	};

	const loading = results.isLoading || searchResult.isLoading;

	return (
		<>
			<section className='top-bar'>
				<Searchbar onChange={debounce(handleSearch, 400)} ref={searchRef} />
				<button onClick={handleClear}>Clear</button>
			</section>
			{loading ? (
				<Loader />
			) : searchResult.isFetched ? (
				searchResult.data.data.meals === null ? (
					<main className='card-holder'>Search Result Not found</main>
				) : (
					<main className='card-holder'>
						{searchResult.data.data.meals.map((meal) => (
							<div className='card-container'>
								<MealCard meal={meal} short />
							</div>
						))}
					</main>
				)
			) : (
				<main className='card-holder'>
					{results.data.data.meals?.map((res, index) => {
						return (
							<div className='card-container'>
								<div className='card'>
									<img
										src={`https://www.themealdb.com/images/ingredients/${res.strIngredient}.png`}
										alt='Image not available'
										loading='lazy'
									/>
									<div>
										<div className='meal-name center'>{res.strIngredient}</div>
										<div className='col1 line-clamp'>
											<div>{res.strDescription}</div>
										</div>
									</div>
									<button
										onClick={() => {
											alert('weee');
										}}>
										More Information
									</button>
									<button onClick={() => handleSearchClick(res.strIngredient)}>
										Search
									</button>
								</div>
							</div>
						);
					})}
				</main>
			)}
		</>
	);
};

export default IngredientPage;
