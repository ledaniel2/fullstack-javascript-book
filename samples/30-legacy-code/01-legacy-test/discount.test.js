test('calculateDiscount returns the correct discounted price', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});
