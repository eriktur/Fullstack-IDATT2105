describe('Contact Form Submission', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/#/contactForm', {
            onBeforeLoad(win) {
                cy.stub(win, 'alert').as('alertStub');
            },
        });

        // Intercept the POST request and provide a mocked response
        cy.intercept('POST', 'http://localhost:3000/feedbacks', {
            statusCode: 200, // or whatever your API returns on success
            body: { message: 'Form submitted successfully' }
        }).as('formSubmit');
    });

    it('Should show correct response from the server on successful submission', () => {
        // Fill out the form
        cy.get('input#name').type('Test person');
        cy.get('input#email').type('person@example.com');
        cy.get('textarea#message').type('Hello, this is a test message.');

        // Submit the form
        cy.get('button[type="submit"]').should('not.be.disabled').click();

        // Wait for the mocked request to complete
        cy.wait('@formSubmit').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            cy.log('Form submission intercepted with mock response:', interception);
        });

        // Assert the alert was called with the correct argument
        cy.get('@alertStub').should('have.been.calledWith', 'Success');
    });
});
