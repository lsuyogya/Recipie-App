import React from 'react';
import { useState } from 'react';
const SearchForm = () => {
	const [searchTxt, setSearchTxt] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(searchTxt);
	};

	const changeHandler = (e) => {
		setSearchTxt(e.target.value);
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				{/* <label htmlFor='search'>Search</label> */}
				<input
					id='search'
					name='searchTxt'
					type='text'
					placeholder='Search...'
					value={searchTxt}
					onChange={changeHandler}
				/>
				<button type='submit'> Search</button>
			</form>
		</>
	);
};

export default SearchForm;
