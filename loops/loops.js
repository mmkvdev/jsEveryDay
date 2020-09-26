const orders  = [100, 1000, 400, 213, 121]

/* Bad Loop Code 👎 */
let total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) {

	// Reduce
	total += orders[i];

	// Map
	withTax.push(orders[i] * 1.5);

	// Filter
	if (orders[i] > 100) {
		highValue.push(orders[i]);
	}
}

/* Good Loop Code */

// Reduce
const total_opt = orders.reduce((acc, cur) => acc + cur)

// Map 
const withTax_opt = orders.map(v => v*1.5);

// Filter
const highValue_opt = orders.filter(v => v > 100);



console.log(total_opt);
console.log(withTax_opt);
console.log(highValue_opt);