describe('Creating a message', () => {
    it('Displays the message in the list', () => {
        cy.visit('http://localhost:3000/')

        cy.get('[data-testid="messageText"]')
            .type('New message')

        cy.get('[data-testid="sendButton"]')
            .click()

        cy.get('[data-testid="messageText"]')
            .should('have.value', '')
        
        cy.contains('New message')
    })
})

//what does this do? This will be the steps we want a user to be able to take when they visit the site
//step 1: visit site
//step 2: enter text into text field
//step 3: click send
//step 4: see that the text field clears out
//step 5: see their text displayed on the screen

//so what is it that our test will be doing?
//step 1: visit site
//step 2: getting the text the user entered field
//step 3: getting the click send feedback
//step 4: getting an empty string from the field
//step 5: verifying the previous message is displayed on the screen
