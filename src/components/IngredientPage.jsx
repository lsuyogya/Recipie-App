import '../styles/RandomPage.scss';
import '../styles/Card.scss';
import React, { useEffect, useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { getCategories, getSearchCategory } from '../apis/GetRecipie';
import Searchbar from './Searchbar';
import Loader from './Loader';
import MealCard from './MealCard';
import { useRef } from 'react';

const CategoryPage = () => {
	const [searchString, setSearchString] = useState(undefined);
	const searchRef = useRef();
	const randomQueryOptions = {
		queryFn: getCategories,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	};

	const result = useQuery({ queryKey: ['getData'], ...randomQueryOptions });

	console.log(result);
	const searchQueryOptions = {
		queryFn: () => getSearchCategory(searchString),
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
	const handleCardClick = (searchString) => {
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

	const loading = result.isLoading || searchResult.isLoading;

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
					{result.data.data.categories.map((res, index) => {
						return (
							<div className='card-container'>
								<div
									className='card clickable'
									tabIndex={0}
									onClick={() => handleCardClick(res.strCategory)}>
									<img
										src={res.strCategoryThumb}
										alt='Image not available'
										loading='lazy'
									/>
									<div>
										<div className='meal-name center'>{res.strCategory}</div>
										<div className='col1 line-clamp'>
											<div>{res.strCategoryDescription}</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</main>
			)}
		</>
	);
};

export default CategoryPage;
