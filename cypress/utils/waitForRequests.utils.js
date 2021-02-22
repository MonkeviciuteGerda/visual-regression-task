class WaitForRequests {
    waitForLongestRequest() {
        cy.intercept("/api/Challenges/?name=Score%20Board").as("longestRequest");
    }
}

export default WaitForRequests;