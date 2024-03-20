describe('Contact Form Submission', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/#/contactForm',)
    });
    it('disables the send button if the form content is invalid', () => {
        // Anta at navn er påkrevd
        cy.get('input#name').type('Test person');
        // Eksempel: Skriver inn en ugyldig e-postadresse
        cy.get('input#email').type('not-an-email');
        // Anta at melding er påkrevd
        cy.get('textarea#message').type('test');

        cy.get('button[type="submit"]').should('be.disabled');
    });
});
    