class UseFixture {
    itemSoldOut() {
        cy.intercept("GET", "/api/Quantitys/", { fixture: "soldOut" }).as("soldOut");
    }
}

export default UseFixture;