describe ('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
    })

    it('entrar com usuario e senha', () => { 
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')
    })
    it('mostra erro parra usuario bloqueado', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'locked out')
    })
    it('mostra erro de senha invalida', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('senha_errada')
        cy.get('#login-button').click()
        cy.contains('Username and password do not match').should('be.visible')
    })
    it('mostra erro de usuario vazio', () => {
        cy.get('[data-test="login-button"]').click()
        cy.contains('Username is required').should('be.visible')
    })
    it('mostra erro de senha vazio', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Password is required').should('be.visible')
    })
    it('coferrir logout', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.get('[data-test="login-button"]').should('be.visible')
    })
})