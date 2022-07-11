function TaxCal(amt) {
    if (amt <= 250000) {
      return "no tax";
    } else if (amt >= 250000 && amt <= 500000) {
      let tax = amt * (10 / 100);
      return tax;
    } else if (amt > 500000 && amt < 1000000) {
      let tax = amt * (20 / 100);
      return tax;
    } else if (amt > 1000000) {
      let tax = amt * (30 / 100);
      return tax;
    }
  }
  
  module.exports = TaxCal;