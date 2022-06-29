import axios from "axios"
const fetchPosts = async (page, limit) => {
    // optionally write fetching logic here or somewhere else
   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    return response;
}

export { fetchPosts }
