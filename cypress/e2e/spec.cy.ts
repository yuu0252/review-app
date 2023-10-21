describe("template spec", () => {
  it("login", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("sample@sample.com");
    cy.get('[name="password"]').type("samplecode");
    cy.get('[type="submit"]').click();
  });
});
