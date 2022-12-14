import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMealData } from '../apis/GetRecipie';
import Loader from './Loader';
import '../styles/card.scss';

const MealDetail = () => {
	const { mealId } = useParams();
	const meal = useQuery(['mealData', mealId], () => getMealData(mealId));
	const mealData = meal?.data?.data?.meals[0];
	let ingredientKeys = [];
	let ingredientMeasures = [];
	let instructionArray = [];

	if (mealData) {
		Object.keys(mealData).map((mealKey, index) => {
			if (mealData[mealKey]) {
				if (mealKey.includes('Ingredient')) {
					ingredientKeys.push(mealKey);
				}
				if (mealKey.includes('Measure')) {
					ingredientMeasures.push(mealKey);
				}
				if (mealKey.includes('Instructions')) {
					instructionArray = mealData[mealKey].split('\r\n');
				}
			}
		});
	}
	if (meal.isLoading)
		return (
			<>
				<div></div>
				<Loader />
			</>
		);
	if (!mealData) return 'Meal not Found';
	return (
		<>
			{/* <div></div> */}
			<div className='card-container-detail'>
				<div className='card flex-row'>
					<img
						src={mealData.strMealThumb}
						alt='Image not available'
						loading='lazy'
					/>
					<div className='flex-col' style={{ gap: '2rem' }}>
						<h1 className='max-width'>{mealData.strMeal}</h1>
						<div className='meal-detail-table'>
							<div className='kvPair'>
								<span className='col1'>
									<div className='meal-key'>Origin </div>
								</span>
								<span className='col2'>
									<div>{mealData.strArea?.replaceAll(',', ', ')}</div>
								</span>
							</div>
							<div className='kvPair'>
								<span className='col1'>
									<div className='meal-key'>Category </div>
								</span>
								<span className='col2'>
									<div>{mealData.strCategory?.replaceAll(',', ', ')}</div>
								</span>
							</div>

							<div className='kvPair'>
								<span className='col1'>
									<div className='meal-key'>Tags </div>
								</span>
								<span className='col2'>
									<div>{mealData.strTags?.replaceAll(',', ', ') || 'none'}</div>
								</span>
							</div>
							<div className='kvPair'>
								<span className='col1'>
									<div className='meal-key'>ID </div>
								</span>
								<span className='col2'>
									<div>{mealData.idMeal?.replaceAll(',', ', ')}</div>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='card'>
					<h2 className='title center'>Ingredients</h2>
					<div className='detail-table-flex'>
						{ingredientKeys.map((ingredient, index) => {
							return (
								<>
									<div className='detail' style={{ fontSize: '1.2rem' }}>
										<div>
											{index + 1}. {mealData[ingredientKeys[index]]}
										</div>
										<div>{mealData[ingredientMeasures[index]]}</div>
									</div>
								</>
							);
						})}
					</div>
				</div>

				<div className='card '>
					<h2 className='title'>Instructions</h2>

					<div style={{ marginLeft: '3rem', fontSize: '1.2rem' }}>
						<ul>
							{instructionArray.map((instruction) => {
								if (instruction) return <li>{instruction}</li>;
							})}
						</ul>
						{/* {mealData.strInstructions} */}
					</div>
				</div>
			</div>
		</>
	);
};

export default MealDetail;
