// Spread Syntax helps developers to work with objects and arrays

const husky = { name: 'Arthur 🐶' };
const capabilities = { iq: 	'♾️', friendliness: '♾️'}

/* Bad Object Code 👎 */
husky['iq'] = capabilities.iq
husky['friendliness'] = capabilities.friendliness 

// OR

// this approach assings objects from left to right
const lvlUp_0 = Object.assign(husky,capabilities);

// we can select which property to assign 
const lvlUp_0_1 = Object.assign(husky, { iq: 45 });
console.log(lvlUp_0);


/* Good Object Code */
const lvlUp_1 = { ...husky, ...capabilities }; 
const lvlUp_1_1 = { ...husky, iq: 45}

console.log(lvlUp_1); 


// Arrays

let Pom = ['Fluffy', 'Friendly', 'Dramatic'];

/* Bad Array Code 👎 */
Pom.push('Short');
Pom.push('Cool');

/* Good Array Code */
Pom = ['Fluffy', 'Friendly', 'Dramatic', ...Pom];
console.log(Pom);
