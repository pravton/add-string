const add = function(stringNumbers) {
  // define result
  result = 0;
  negatives = [];
  // if this is empty string return 0
  if(stringNumbers.length === 0) return result;

  // match only the number from the string using match method
  const strArray = stringNumbers.match(/-*\d+/g);

  // Loop the str array
  strArray.forEach(el => { 
    // if array contains negatives push to negatives
    if(parseInt(el) < 0) negatives.push(el);
    // If the number is more than 1000 ignore it.
    else if (parseInt(el) >= 1000) return;
    // sum the numbers
    result += parseInt(el);
  });

  // return error msg if there any negatives in negatives array
  if(negatives.length) return `Negatives not allowed! ${negatives}`;

  // return the result
  return result;
}

module.exports = { add };