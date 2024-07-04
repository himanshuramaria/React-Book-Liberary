import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://openlibrary.org/search.json?title=',
})

export default instance;