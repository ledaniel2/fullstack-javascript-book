describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display a welcome message', async () => {
    await expect(element(by.text('Welcome to my App!'))).toBeVisible();
  });
});
