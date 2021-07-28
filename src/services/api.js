import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchPicturesApi = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits)
    .catch(console.log);
};

export default fetchPicturesApi;
