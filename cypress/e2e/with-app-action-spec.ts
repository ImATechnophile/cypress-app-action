describe('TodoMVC with App Actions', function () {
    beforeEach(function () {
        cy.visit('/')
    })

    it('should add task and verify the count', () => {
        cy.window().its('model').should('be.an', 'object').invoke('addTodo', 'Explore Browserstack')
        cy.get('.todo-count').contains('1 item left')
    })
})