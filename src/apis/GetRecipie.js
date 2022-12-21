import axios from 'axios';

const baseURL = 'https://www.themealdb.com/api/json/v1/1/'

const getRandomData = () => {
    const res = axios.get(`${baseURL}/random.php`);
    return res;
};
const getSearchData = (searchParam) => {
    const res = axios.get(`${baseURL}/search.php?s=${searchParam}`);
    return res;
};

const getMealData = (mealId) =>{
    const res = axios.get(`${baseURL}/lookup.php?i=${mealId}`)
    return res
}

const getCategories = () =>{
    const res = axios.get(`${baseURL}/categories.php`)
    return res
}

const getSearchCategory = (searchParam) => {
    const res = axios.get(`${baseURL}/filter.php?c=${searchParam}`);
    return res;
}
const getIngredients = () =>{
    const res = axios.get(`${baseURL}/list.php?i=list.php`)
    return res
}

const getSearchIngredient = (searchParam) => {
    const res = axios.get(`${baseURL}/filter.php?i=${searchParam}`);
    return res;
};
export {getRandomData, getSearchData, getMealData, getCategories, getSearchCategory, getIngredients, getSearchIngredient};