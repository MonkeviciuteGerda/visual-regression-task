import SidebarComponent from '../components/sidebar.component';

class HomePage {
    get sidebar() {
        return new SidebarComponent();
    }

    getProductCard() {
        return cy.get("mat-card");
    }
}

export default new HomePage();