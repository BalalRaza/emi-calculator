function getFormattedAmount(number) {
  // If number is zero, return as it is:
  if (number === 0) {
    return number;
  }
  // Else number is non-zero, then convert the number to String:
  let x = number.toString(); // "10337.02"
  // Make float to int (Get rid of decimals)
  // BUT, if it is coming from toFormattedFloat, it will have no decimals
  // So check first:
  if (x.indexOf('.') !== -1) {
    x = x.substring(0, x.indexOf('.')); // x = "10377"
  }
  let lastThree = x.substring(x.length - 3); // "377"
  const otherNumbers = x.substring(0, x.length - 3); // 10
  if (otherNumbers !== '') {
    lastThree = `,${lastThree}`; // ",377"
  }
  // The .replace regex method puts a ',' after every two numbers:
  const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree; // "10,377"
  return res;
}

function Currency(props) {
  const formattedAmount = getFormattedAmount(props.amount);

  return props.padWithSpaces
    ? ` ₹${formattedAmount} `
    : `₹${formattedAmount}`;
}

export default Currency;
