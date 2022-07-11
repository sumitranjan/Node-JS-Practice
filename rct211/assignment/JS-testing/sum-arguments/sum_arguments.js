//It should perform this sum "+" operation
function sum(...args) {
  if (args.length === 0) {
    return "sum invoked without arguments";
  } else if (args.length === 1) {
    return "sum functions needs atleast 2 arguments";
  }

  const sumValue = [...args].reduce((a,c) => a+ Number(c),0);

  return Number(sumValue.toFixed(1));
}

module.exports = sum;
