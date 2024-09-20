function formatCurrency(amount) {
    return `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00`;
}

function transformArrayToObject(array) {
    return Object.fromEntries(array);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertToCamelCase(string) {
    return string
        .split(' ')
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

module.exports = {
    formatCurrency,
    transformArrayToObject,
    capitalizeFirstLetter,
    convertToCamelCase,
};
