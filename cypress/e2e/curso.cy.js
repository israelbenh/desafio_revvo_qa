describe('Desafio Revvo QA - Cadastro de Curso', () => {
  it('Login e cadastro de curso', () => {
    cy.visit('https://sandbox.moodledemo.net/login/index.php');

    cy.get('#username').type('admin');
    cy.get('#password').type('sandbox24');
    cy.get('#loginbtn').click();

    cy.contains('Site administration').click();
    cy.contains('Courses').click();
    cy.contains('Add a new course').click();

    cy.get('input[name="fullname"]').type('Curso Desafio Revvo QA');
    cy.get('input[name="shortname"]').type('RevvoQA01');
    cy.get('input[name="idnumber"]').type('123');
    cy.get('#id_saveanddisplay').scrollIntoView().click();

    cy.contains('Curso Desafio Revvo QA').should('exist');
  });
});
