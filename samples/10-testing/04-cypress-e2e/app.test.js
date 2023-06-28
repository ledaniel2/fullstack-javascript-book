describe('Todo App', () => {
  it('should navigate to the Todo App and add a new todo', () => {
    // Visit the Todo App
    cy.visit('http://localhost:3000');

    // Enter 'Feed the cat' into the input field and press enter
    cy.get('.todo-input')
      .type('Feed the cat{enter}');

    // The new todo should be visible in the list
    cy.get('.todo-list')
      .should('contain', 'Feed the cat');
  });
});
