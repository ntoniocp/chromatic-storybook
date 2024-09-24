describe("Login Page", () => {
  it("Should have a form with an email and password input and a button", () => {
    cy.visit("/");
    cy.get("form").get('input[name="email"]');
    cy.get("form").get('input[name="password"]');
    cy.get("form").get('button[type="submit"]');
  });

  it("Should not allow users to log in with an empty email", () => {
    cy.visit("/");
    cy.get("form").get('input[name="password"]').type("12345678");
    cy.get("form").get('button[type="submit"]').click();
    cy.contains("Email is required");
  });

  it("Should not allow users to log in with an invalid email", () => {
    cy.visit("/");
    cy.get("form").get('input[name="email"]').type("jane");
    cy.get("form").get('input[name="password"]').type("12345678");
    cy.get("form").get('button[type="submit"]').click();
    cy.contains("Invalid email address");
  });

  it("Should not allow users to log in with an empty password", () => {
    cy.visit("/");
    cy.get("form").get('input[name="email"]').type("jane@doe.com");
    cy.get("form").get('button[type="submit"]').click();
    cy.contains("Password is required");
  });

  it("Should not allow users to log in with password with less than 8 characters", () => {
    cy.visit("/");
    cy.get("form").get('input[name="email"]').type("jane@doe.com");
    cy.get("form").get('input[name="password"]').type("123");
    cy.get("form").get('button[type="submit"]').click();
    cy.contains("Password must have at least 8 characters");
  });

  it("Should allow users to log in with a valid email and password.", () => {
    cy.visit("/");
    cy.get("form").get('input[name="email"]').type("jane@doe.com");
    cy.get("form").get('input[name="password"]').type("12345678");
    cy.get("form").get('button[type="submit"]').click();
    cy.contains("Logged in successfully!");
  });
});
