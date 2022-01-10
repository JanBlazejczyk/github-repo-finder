describe("General tests for the whole application", () => {

   beforeEach(() => {
      cy.visit("http://localhost:3000/");
   });

   it("should display 'Search for users' in main view at the initial stage", () => {
      cy
         .get(".main-message")
         .contains("Search for users");
   });

   it("should not display anything in the searchbar error box at the initial stage", () => {
      cy
         .get(".search-bar__error")
         .should('not.have.text')
   });

   it("should show (on submit) the message that the user is invalid when the input is empty", () => {
      cy
         .get(".button")
         .click();

      cy
         .get(".search-bar__error")
         .contains("Please enter valid GitHub username");
   });

   it("should show (on submit) the message that the user is invalid when the input is invalid username", () => {
      cy
         .get(".search-bar--input")
         .type("invalidUser--");

      cy
         .get(".button")
         .click();
      cy
         .get(".search-bar__error")
         .contains("Please enter valid GitHub username");
   });

   it("should display 'User not found' in main view if we search for a non-existent user", () => {
      cy
         .get(".search-bar--input")
         .type("nonexistentuser47472913")

      cy
         .get(".button")
         .click()

      cy
         .get(".main-message")
         .contains("User not found");
   });

   it("should display list of repos while submitted with an existing github user", () => {
      cy
         .get(".search-bar--input")
         .type("allegro")

      cy
         .get(".button")
         .click()

      cy
         .get(".main-view")
         .children()
         .should("have.class", "repos__list")
   });
})