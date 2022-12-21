import React, { useRef } from 'react';
import '/src/styles/searchBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { forwardRef } from 'react';

const Searchbar = forwardRef(({ onChange }, _ref) => {
	return (
		<span className='search-box'>
			<SearchIcon sx={{ color: '#242424' }} />
			<input
				ref={_ref}
				type='text'
				name='search'
				placeholder='Search'
				onChange={onChange}
			/>
		</span>
	);
});

export default Searchbar;
