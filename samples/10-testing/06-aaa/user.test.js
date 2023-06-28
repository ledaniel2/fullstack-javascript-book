describe('User', () => {
  it('should be able to register with a valid email and password', async () => {
    // Arrange
    const user = new User();
    
    // Act
    const result = await user.register('test@example.com', 'strongpassword');
    
    // Assert
    expect(result.success).toBe(true);
  });
});
