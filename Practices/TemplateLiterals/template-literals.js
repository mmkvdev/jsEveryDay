/* Template Literals */
const apple = {
    logo: '🍎',
    brandValue: 1,
    country: 'US',
    city: 'Palo Alto',
    age: 1976
};

/* Bad Code 👎 */
let appleString =
    apple.logo +
    '  is a  ' +
    ' , ' +
    ' globally recognized brand with brand value of ' +
    apple.brandValue;

// the above approach is gonna be annoying is because of the repetitive manual intervention of the developer to include spaces and getting objects manually structured.

/* Optmized Way */
const { logo, brandValue, country } = apple;

let appleStringValue = `${logo} is a globally recognized brand with brand value of ${brandValue}`;

console.log(appleStringValue);

// Advanced approach - functional way
function appleAge(str, age) {
    const appleAge = age > 25 ? 'Legend' : 'StartUp';
    return `${str[0]}${appleAge} at ${age} years`;
}


const appleBio = appleAge`This brand is ${apple.age}`;

// reference - https://lit-html.polymer-project.org/