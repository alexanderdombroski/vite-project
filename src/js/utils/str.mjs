const capitalize = str => str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';
const toTitleCase = str => str ? str.split(' ').map(capitalize).join(' ') : '';

export { capitalize, toTitleCase }