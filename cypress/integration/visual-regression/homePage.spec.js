// Notice: waiting for specific time is a really really ad practice, but since we have this site that we cannot control, let's just leave it in here

/*
Tasks:
1. Test About us page
2. Test home page on mobile Pixel 2 and tablet iPad pro resolutions
3. Write a test to Write a review for a product and then use visual regression to test it
4. Select your own 2 Test cases and implement them, use data mocking and different plugin configurations
*/

import WaitForRequests from "../../utils/waitForRequests.utils";
import UseFixture from "../../utils/useFixture.utils";
import HomePage from "../../page-objects/home.page";

const waitForRequests = new WaitForRequests();
const useFixture = new UseFixture();

describe("Home page visual regression tests", () => {
  beforeEach(() => {
    cy.setCookie("cookieconsent_status", "dismiss");
    cy.setCookie("welcomebanner_status", "dismiss");

    waitForRequests.waitForLongestRequest();
  });

  it("should be able to check home page", () => {
    cy.clearCookies();
    cy.visit("/");
    cy.wait("@longestRequest");
    cy.wait(500); // wait for the animation

    cy.matchImageSnapshot("Home page");
  });

  it("should be able to check home page without banners", () => {
    cy.visit("/");
    cy.wait("@longestRequest");
    cy.wait(500); // wait for the animation

    cy.matchImageSnapshot("Home page - without banners");
  });

  it("should be able to see out of stock item", () => {
    useFixture.itemSoldOut();
    cy.visit("/");
    cy.wait("@soldOut");

    HomePage.getProductCard().eq(0).matchImageSnapshot("Sold out item");
  });

  it("should be able to blackout some elements", () => {
    const blackoutItems = [".appVersion div"];

    cy.visit("/");
    cy.wait("@longestRequest");

    HomePage.sidebar.openMenu();
    cy.wait(500); // wait for the animation
    HomePage.sidebar
      .getSidebar()
      .matchImageSnapshot({ blackout: blackoutItems });
  });
});