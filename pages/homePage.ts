import { Page, expect } from '@playwright/test';

export default class HomePage {
    constructor(public page: Page){}

    async clickSolution(){
        const solutions = this.page.locator('li:has-text("Solutions")');
        await solutions.click();
    }

    async clickAboutus(){
        const aboutus = this.page.locator('li:has-text("About Us")');
        await aboutus.click();
    }

    async clickServices(){
        const services = this.page.locator('li:has-text("Services")');
        await services.click();
    }

    async clickProducts(){
        const products = this.page.locator('li:has-text("Products")');
        await products.click();
    }

    async clickLocations(){
        const locations = this.page.locator('li:has-text("Locations")');
        await locations.click();
    }

    async clickAdmin(){
        const admin = this.page.locator('li:has-text("Admin Page")');
        await admin.click();
    }
}