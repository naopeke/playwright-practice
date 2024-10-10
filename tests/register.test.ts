import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL })=>{
    await page.goto(`${baseURL}index.htm`)
})

test.describe ('Register', ()=>{
    test('Register_01', async ({ page, baseURL })=>{
        await page.getByRole('link', {name: 'Register'}).click();
        //Received string: "https://parabank.parasoft.com/parabank/register.htm;jsessionid=7D55AB5EB44F76C622C2CAC412FC06F2"
        // バックスラッシュは、特定の文字をエスケープ（無効化）するために使用されます。
        // \/: スラッシュ（/）を正規表現の中で通常の文字として扱うためにエスケープします。
        // \.: ドット（.）も特別な意味を持つため（任意の1文字を表す）、通常のドットとして扱いたい場合にエスケープします。
        expect(page).toHaveURL(/\/register\.htm/);
    })



})