import axios from "axios";

const getRandomRecipie = await axios.get(`{process.env.REACT_APP_BASEURL}/random.php`)
export default getRandomRecipie