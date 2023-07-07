describe("Login", () => {
  it("should login from dashboard page", () => {
    //load user data from fixtures
    cy.fixture("user").then((user) => {
      // Start from the dashboard page
      cy.visit("http://localhost:3000/dashboard");

      // Find a link with an href attribute containing "login" and click it
      cy.get("button").contains("Sign In").click();
      // Find email input and type in email
      cy.get('input[name="email"]').type(user.email);
      // Find password input and type in password
      cy.get('input[name="password"]').type(user.password);
      // Find button with text "Sign In" and click it
      cy.get('button[name="login"]').click();

      // Page should includes a button with text "Log Out"
      cy.get("button").contains("log out");
      // there should be a cookie with name 'token'
      cy.getCookie("codac-token").should("exist");
    });
  });
});
