import { Page, expect } from '@playwright/test';

export default class RegisterPage {
    
    constructor(public page: Page){}

    async enterFirstName(firstname: string){
        await this.page.locator("[name='customer.firstName']").fill(firstname);
    }

    async enterLastName(lastname: string){
        await this.page.locator("[name='customer.lastName']").fill(lastname);
    }

    async enterAddress(address: string){
        await this.page.locator("[name='customer.address.street']").fill(address);
    }

    async enterCity(city: string){
        await this.page.locator("[name='customer.address.city']").fill(city);
    }

    async enterState(state: string){
        await this.page.locator("[name='customer.address.state']").fill(state);
    }

    async enterZipCode(zipcode: string){
        await this.page.locator("[name='customer.address.zipCode']").fill(zipcode);
    }

    async enterPhone(phone: string){
        await this.page.locator("[name='customer.phoneNumber']").fill(phone);
    }

    async enterSSN(ssn: string){
        await this.page.locator("[name='customer.ssn']").fill(ssn);
    }

    async enterUsername(username: string){
        await this.page.locator("[name='customer.username']").fill(username);
    }

    async enterPassword(password: string){
        await this.page.locator("[name='customer.password']").fill(password);
    }

    async enterConfirm(confirm: string){
        await this.page.locator("[name='repeatedPassword']").fill(confirm);
    }
}