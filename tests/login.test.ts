import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.beforeEach(async ({ page, baseURL})=>{
    await page.goto(`${baseURL}index.htm`)
})

test.describe('Log in', ()=> {
    test('Login_01', async({ page })=>{
        const login = new LoginPage(page);
        await login.enterUsername('Janita02');
        await login.enterPassword('abc123');
        await login.clickLogin();
    })

})