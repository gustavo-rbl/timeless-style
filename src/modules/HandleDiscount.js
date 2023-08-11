// 25% discount
const discount = 25;

// return price based on a discount
// in this case a 25% discount is specified above
const HandleDiscount = (price) => {
  return parseFloat((Number(price) - (Number(price) * discount) / 100).toFixed(2));
};

export { discount, HandleDiscount };
