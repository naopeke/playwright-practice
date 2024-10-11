import { Page, expect } from '@playwright/test';

export default class LoginPage {
    
    constructor(public page: Page){}

    async enterUsername(username: string){
        await this.page.locator("input[name='username']").fill(username);
    }

    async enterPassword(password: string){
        await this.page.locator("input[name='password']").fill(password);
    }

    async clickLogin(){
        await this.page.getByRole('button', {name: 'Log In'}).click();
    }
}