import React from 'react';

const IngredientCard = ({ res, handleSearchClick }) => {
	return (
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
			{/* <button
				onClick={() => {
					alert('weee');
				}}>
				More Information
			</button> */}
			<button onClick={() => handleSearchClick(res.strIngredient)}>
				Search
			</button>
		</div>
	);
};

export default IngredientCard;
