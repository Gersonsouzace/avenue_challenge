describe('Carrinho de compras', ()=>{
    
    beforeEach(() => {
        cy.visit('/')
    })

    it
    ('Adicionar produno no carrinho', ()=>{
        cy.get('#twotabsearchtextbox').type('Sou péssimo em português {enter}')
        cy.get(".a-section .s-image").first().click()
        cy.get('#add-to-cart-button').click()
        cy.get('#sw-atc-details-single-container span').should('have.text', '\nAdicionado ao carrinho\n')
    })

    it('Adicionar 3 itens no carrinho e verificar o valor total', ()=>{
        cy.get('#twotabsearchtextbox').type('Controle Dual Shock Usb Dazz 621322 {enter}')
        cy.get(".a-section .s-image").first().click()
        cy.get('#quantity').select('3')
        cy.get('#add-to-cart-button').click()
        cy.get('#sw-gtc').click()
        cy.get('#sc-subtotal-label-activecart').should('have.text', '\n\n\n\n\n\n\n\n\nSubtotal  (3 itens):')
        cy.get('#sc-subtotal-amount-activecart').should('contain', '178,59')
    })

})