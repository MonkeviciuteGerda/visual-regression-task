export default class SidebarComponent {
    getMenuIcon() {
        return cy.get('[aria-label="Open Sidenav"]');
    }

    getSidebar() {
        return cy.get('.mat-drawer-inner-container');
    }

    openMenu() {
        this.getMenuIcon().click();
    }
}

