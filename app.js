'use strict';

const prom = new Promise(resolve => {
	console.log('Constructor');
	// for (let i = 0; i < 1000000000; i++) {}
	setTimeout(() => {
		resolve('Timer');
	}, 1000);
});
prom.then(data => console.log(data));

Promise.resolve('Instant').then(data => console.log(data));

Promise.reject(new Error('Error')).catch(error =>
	console.error(error)
);
