import React, { Suspense, startTransition } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Loader from '/src/components/Loader';
const Layout = React.lazy(() => import('/src/components/Layout'));
const MealDetail = React.lazy(() => import('/src/components/MealDetail'));
const HomePage = React.lazy(() => import('/src/components/HomePage'));
const CategoryPage = React.lazy(() => import('/src/components/CategoryPage'));
const IngredientPage = React.lazy(() =>
	import('/src/components/IngredientPage')
);

const Router = () => {
	const StyledLoader = (
		<Loader style={{ gridRow: 'span 2', gridColumn: 'span 2' }} />
	);
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					path='/'
					element={
						<Suspense fallback={StyledLoader}>
							<Layout />
						</Suspense>
					}>
					<Route
						path='/'
						element={
							<Suspense fallback={StyledLoader}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route path='/meal'>
						<Route
							path=':mealId'
							element={
								<Suspense fallback={StyledLoader}>
									<MealDetail />
								</Suspense>
							}
						/>
					</Route>
					<Route
						path='/categories'
						element={
							<Suspense fallback={StyledLoader}>
								<CategoryPage />
							</Suspense>
						}
					/>
					<Route
						path='/ingredients'
						element={
							<Suspense fallback={StyledLoader}>
								<IngredientPage />
							</Suspense>
						}
					/>
				</Route>

				<Route path='*' element={404} />
			</>
		)
	);

	return (
		<Suspense fallback={Loader}>
			{/* {startTransition(() => { */}
			<RouterProvider router={router} />;{/* })} */}
		</Suspense>
	);
};

export default Router;
