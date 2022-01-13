const h1 = document.querySelector('h1');
const letters = document.querySelectorAll('.letter');

let randColor = function() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};

// setInterval(() => {
// 	h1.style.color = randColor();
// }, 1000);

setInterval(() => {
	for (let letter of letters) {
		letter.style.color = randColor();
	}
}, 1000);
