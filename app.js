'use strict';

function generate(event) {
	const button = document.querySelector('.button');
	const el = document.querySelector('.down');
	const rect = el.getBoundingClientRect();

	console.log(button.getBoundingClientRect());
	console.log(rect);

	console.log(`X offset: ${window.scrollX}`);
	console.log(`Y offset: ${window.scrollY}`);
	console.log(`clientWidth: ${document.documentElement.clientWidth}`);
	console.log(
		`clientHeight: ${document.documentElement.clientHeight}`
	);

	window.scrollTo({
		left: window.scrollX + rect.left,
		top: window.scrollY + rect.top,
		behavior: 'smooth',
	});
}
