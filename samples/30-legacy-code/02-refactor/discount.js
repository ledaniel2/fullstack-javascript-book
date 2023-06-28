function calculateDiscount(price, discount) {
  const discountAmount = calculateDiscountAmount(price, discount);
  return price - discountAmount;
}

function calculateDiscountAmount(price, discount) {
  return price * (discount / 100);
}
