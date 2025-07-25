import axios from "https://cdn.skypack.dev/axios";

export const fetchDataAsync = async () => {
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	const response = await axios.get(endpoint);
	return response.data;
};


