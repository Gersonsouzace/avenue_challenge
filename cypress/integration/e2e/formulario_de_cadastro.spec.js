describe('Formulario de cadastro', ()=>{
    it('Preenche o fomrulario de cadastro', ()=>{
        cy.visit('/')
        cy.get('#nav-link-accountList').click()
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').type("Teste da Avenue")
        cy.get('#ap_email').type("avenue@teste.com.br")
        cy.get('#ap_password').type("12345678")
        cy.get('#ap_password_check').type("12345678")
        cy.get('.email-text').should('be.visible')
    })
})