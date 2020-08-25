/* Destructuring */

const apple = {
    logo: '🍎',
    brandValue: 1,
    country: 'US',
    city: 'Palo Alto'
};

/* Bad Code 👎 */
function eat(apple) {
    return `Eat ${apple.logo}, everyday cause it's brand value is ${apple.brandValue}`;
}

/* Object Destructuring */
function eat({ logo, brandValue }) {
    return `Eat ${logo}, everyday cause it's brand value is ${brandValue}`;
}

/* OR */

function eat(apple) {
    const { logo, brandValue } = apple;
    return `Eat ${logo}, everyday cause it's brand value is ${brandValue}`;
}
console.log(eat(apple));
