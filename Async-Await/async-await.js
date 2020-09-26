const random = () => {
	return Promise.resolve(Math.random());
}

/* Bad Loop Code 👎 */

const sumRandomAsyncNums = () => {
	let first;
	let second;
	let third;

	return random().then(v => {
			first = v;
			return random();
		}).then(v => {
			  second = v;
			return random();
		}).then(v => {
			third = v;
			console.log('Result', first + second + third);
		});
}


/* Good Loop Code */

// adding async to the function will force it to return a Promise
const sumRandomAsyncNums_Opt = async() => {
	const first = await random();
	const second = await random();
	const third = await random();

	console.log(`Result ${first+second+third}`);
}

sumRandomAsyncNums();
sumRandomAsyncNums_Opt();