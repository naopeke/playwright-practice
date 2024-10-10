import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL })=>{
    page.goto(`${baseURL}index.htm`)
})

test.describe ('Register', ()=>{
    test('Register_01', async ({ page })=>{
        await page.getByRole('link', {name: 'Register'}).click();

    })



})