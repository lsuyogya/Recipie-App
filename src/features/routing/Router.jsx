import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Layout from '../../components/Layout';
import MealDetail from '../../components/MealDetail';
import HomePage from '../../components/HomePage';
import CategoryPage from '../../components/CategoryPage';
import IngredientPage from '../../components/IngredientPage';

const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/meal'>
						<Route path=':mealId' element={<MealDetail />} />
					</Route>
					<Route path='/categories' element={<CategoryPage />} />
					<Route path='/ingredients' element={<IngredientPage />} />
				</Route>
				<Route path='*' element={404} />
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default Router;
