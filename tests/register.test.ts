import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/registerPage';

test.beforeEach(async ({ page, baseURL })=>{
    await page.goto(`${baseURL}index.htm`)
})

test.describe ('Register', ()=>{
    test('Register_01', async ({ page, baseURL })=>{
        const register = new RegisterPage(page);
        await page.getByRole('link', {name: 'Register'}).click();
        //Received string: "https://parabank.parasoft.com/parabank/register.htm;jsessionid=7D55AB5EB44F76C622C2CAC412FC06F2"
        // バックスラッシュは、特定の文字をエスケープ（無効化）するために使用されます。
        // \/: スラッシュ（/）を正規表現の中で通常の文字として扱うためにエスケープします。
        // \.: ドット（.）も特別な意味を持つため（任意の1文字を表す）、通常のドットとして扱いたい場合にエスケープします。
        expect(page).toHaveURL(/\/register\.htm/);
        await register.enterFirstName('Jane')
        await register.enterLastName('Doe');
        await register.enterAddress('1-24-5');
        await register.enterCity('Bunkyo-ku');
        await register.enterState('Tokyo');
        await register.enterZipCode('112-0001')
        await register.enterPhone('123-456-7890');
        await register.enterSSN('000-11-1111')
        await register.enterUsername('Janita');
        await register.enterPassword('abc123');
        await register.enterConfirm('abc123');
    })



})