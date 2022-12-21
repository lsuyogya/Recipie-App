import 'styles/HomePage.scss';
import 'styles/card.scss';
import React, { useEffect, useState, useCallback } from 'react';
import { useQueries, useQuery } from 'react-query';
import { getIngredients, getSearchIngredient } from 'apis/GetRecipie';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import MealCard from 'components/MealCard';
import { useRef } from 'react';
import IngredientCard from 'components/IngredientCard';

const IngredientPage = () => {
	const [searchString, setSearchString] = useState(undefined);
	const [endIndex, setEndIndex] = useState(6);
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

	//InfiniteScrolling
	const observer = useRef();
	const lastElementCallback = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) setEndIndex(endIndex + 6);
			});
			if (node) observer.current.observe(node);
		},
		[endIndex]
	);

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
							<div className='card-container' key={meal.strIngredient}>
								<MealCard meal={meal} short />
							</div>
						))}
					</main>
				)
			) : (
				<main className='card-holder'>
					{results.data.data.meals?.slice(0, endIndex).map((res, index) => {
						return index === endIndex - 1 ? (
							<div
								className='card-container'
								key={res.strIngredient}
								ref={lastElementCallback}>
								<IngredientCard
									res={res}
									handleSearchClick={handleSearchClick}
								/>
							</div>
						) : (
							<div className='card-container' key={res.strIngredient}>
								<IngredientCard
									res={res}
									handleSearchClick={handleSearchClick}
								/>
							</div>
						);
					})}
				</main>
			)}
		</>
	);
};

export default IngredientPage;
