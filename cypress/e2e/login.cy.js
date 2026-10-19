describe ('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })

    it('entrar com usuario e senha', () => { 
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')
    })
    it('mostra erro parra usuario bloqueado', () => {
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'locked out')
    })
})