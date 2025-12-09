describe('login flow spec', () => {
  it('should login successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.wait(3000);


    cy.get('input[name="username"]').type('Admin');
    cy.wait(3000);
    cy.get('input[name="password"]').type('admin123');
    cy.wait(3000);
    cy.get('button[type="submit"]').click();
    cy.wait(6000);
    
    // assertions
     cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');

    // Logout
    cy.get('.oxd-userdropdown-icon').click();
    cy.contains('Logout').click();

    cy.url().should('include', '/auth/login');

    
    



  });
});
