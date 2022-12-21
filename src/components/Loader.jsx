import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';
const Loader = ({ style = {} }) => {
	return (
		<div className='center' style={style}>
			<CircleLoader color='#74e42e' />
		</div>
	);
};

export default Loader;
