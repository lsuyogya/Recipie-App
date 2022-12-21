import React, { useEffect, useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { getRandomData as getData, getSearchData } from '/src/apis/GetRecipie';
import '/src/styles/HomePage.scss';
import MealCard from '/src/components/MealCard';
import MealCardContainer from '/src/components/MealCardContainer';
import Searchbar from '/src/components/Searchbar';
import Loader from '/src/components/Loader';

const HomePage = () => {
	const [searchString, setSearchString] = useState(undefined);
	const [randomArray, setRandomArray] = useState([
		Math.random(),
		Math.random(),
		Math.random(),
	]);

	const randomQueryOptions = {
		queryFn: getData,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	};

	//TODO: Parallel Queries only work parallelly on hard refresh
	const result = useQueries([
		{ queryKey: ['getData', randomArray[0]], ...randomQueryOptions },
		{ queryKey: ['getData', randomArray[1]], ...randomQueryOptions },
		{ queryKey: ['getData', randomArray[2]], ...randomQueryOptions },
	]);

	const searchQueryOptions = {
		queryFn: () => getSearchData(searchString),
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	};

	const searchResult = useQuery({
		queryKey: ['searchData', searchString],
		...searchQueryOptions,
		enabled: !!searchString,
	});

	const handleSearch = (e) => {
		setSearchString(e.target.value);
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

	const handleRefetch = () => {
		setRandomArray([Math.random(), Math.random(), Math.random()]);
		// result.map((res) => {
		// 	setSearchString(undefined);
		// 	return res.refetch();
		// });
	};

	const loading = result.some((res) => res.isLoading) || searchResult.isLoading;

	return (
		<>
			<section className='top-bar'>
				<button onClick={handleRefetch}>Random</button>
				<Searchbar onChange={debounce(handleSearch, 400)} />
			</section>
			{loading ? (
				<Loader />
			) : searchResult.isFetched ? (
				searchResult.data.data.meals === null ? (
					<main className='card-holder'>
						<div className='card-container'>
							<div className='card'>Search Result Not found</div>
						</div>
					</main>
				) : (
					<main className='card-holder'>
						{searchResult.data.data.meals.map((meal) => (
							<div className='card-container'>
								<MealCard meal={meal}></MealCard>
							</div>
						))}
					</main>
				)
			) : (
				<main className='card-holder'>
					{result.map((res, index) => {
						return <MealCardContainer data={res.data} key={index} />;
					})}
				</main>
			)}
		</>
	);
};

export default HomePage;
