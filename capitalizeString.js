const capitalizeString = (str) => {
  if (typeof str !== 'string') throw new Error('input must be a string');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalizeString;