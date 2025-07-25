import { fetchDataAsync } from "./axios.js";
import { render } from "./render.js";

export async function initApp() {
	try {
		const posts = await fetchDataAsync();
		// console.log(posts);
		render(posts);
	} catch (error) {
		console.error("Fetch failed:", error);
		render("Failed to load posts. Please try again later.");
	}
}

initApp();
