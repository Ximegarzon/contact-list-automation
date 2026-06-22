const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


Given('que el usuario se encuentra en la página de login', async function () {

    this.loginPage = new LoginPage(this.page);

    await this.loginPage.navigate();

});


When('ingresa credenciales válidas', async function () {

    await this.loginPage.login(
        'ximenaqa2026@gmail.com',
        'Test123456'
);

});


Then('debe visualizar la lista de contactos', async function () {

    await expect(this.page.locator('text=Contact List'))
        .toBeVisible();

});