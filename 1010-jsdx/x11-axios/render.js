const appContainer = document.getElementById("app");

export function render(data) {
	appContainer.innerHTML = "";

	if (typeof data === "string") {
		appContainer.innerHTML = `<p class="error">${data}</p>`;
		return;
	}

	data.forEach((post) => {
		const postEl = document.createElement("div");

		postEl.className = "post";
		postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
		appContainer.appendChild(postEl);
	});
}
