describe('TodoMVC without App Actions', function () {
    beforeEach(function () {
        cy.visit('/')
    })

    it('should add task and verify the count', () => {
        cy.get('input[class="new-todo"]').type("Explore Browserstack")
        cy.get('input[class="new-todo"]').type('{Enter}')
        cy.get('.todo-count').contains('1 item left')
    })
})