import axios from 'axios';

const getRandomData = () => {
    const res = axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    return res;
};
const getSearchData = (searchParam) => {
    const res = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`);
    return res;
};

const getMealData = (mealId) =>{
    const res = axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    return res
}

const getCategories = () =>{
    const res = axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    return res
}

const getSearchCategory = (searchParam) => {
    const res = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchParam}`);
    return res;
};
export {getRandomData, getSearchData, getMealData, getCategories, getSearchCategory};