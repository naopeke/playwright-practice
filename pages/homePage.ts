import { Page, expect } from '@playwright/test';

export default class HomePage {
    constructor(
        public page: Page,
        private baseURL: string
    ){}

    async clickSolution(){
        const solutions = this.page.locator('li:has-text("Solutions")');
        await solutions.click();
    }

    async clickAboutus(){
        const aboutus = this.page.locator('li:has-text("About Us")');
        await aboutus.click();
        await this.page.waitForURL(`${this.baseURL}about.htm`);
    }

    async clickServices(){
        const services = this.page.locator('li:has-text("Services")');
        await services.click();
        await this.page.waitForURL(`${this.baseURL}services.htm`)
    }

    async clickProducts(){
        const products = this.page.locator('li:has-text("Products")');
        await products.click();
        await this.page.waitForURL('https://www.parasoft.com/products/');
    }

    async clickLocations(){
        const locations = this.page.locator('li:has-text("Locations")');
        await locations.click();
    }

    async clickAdmin(){
        const admin = this.page.locator('li:has-text("Admin Page")');
        await admin.click();
        await this.page.waitForURL(`${this.baseURL}admin.htm`)
    }
}