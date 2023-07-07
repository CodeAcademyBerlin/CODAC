import LoginModal from "./login-modal";

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress Component Test
describe("<LoginModal />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Sign In modal
    cy.mount(
      <LoginModal
        loginMutation={undefined}
        onLoginSuccess={undefined}
        error={undefined}
        data={undefined}
      />
    );

    // The page should contain an email input
    cy.get("input[name=email]").should("be.visible");

    // The page should contain a password input
    cy.get("input[name=password]").should("be.visible");

    // The page should contain a submit button
    cy.get("button[name=login]").should("be.visible");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
