const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ContactPage = require('../pages/ContactPage');


Given('que el usuario inicio sesion correctamente', async function(){

    this.loginPage = new LoginPage(this.page);

    await this.loginPage.navigate();

    await this.loginPage.login(
        'ximenaqa2026@gmail.com',
        'Test123456'
    );

});


When('crea un nuevo contacto', async function(){

    this.contactPage = new ContactPage(this.page);

    await this.contactPage.createContact();

});


Then('el contacto debe aparecer en la lista', async function(){

    await expect(
        this.page.locator('text=Contact List')
    ).toBeVisible();

});