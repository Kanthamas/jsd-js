"use strict";

document.getElementById(
	"try-js"
).innerHTML = `<p class="text-3xl font-bold text-blue-700">I'm JSD 10</p>`;

const tryJs = document.getElementById("try-js");
console.log(tryJs);
tryJs.innerText = "John Doe (Again)";
tryJs.classList.add(
	"bg-amber-500",
	"w-[80%]",
	"p-8",
	"text-3xl",
	"font-semibold"
);


