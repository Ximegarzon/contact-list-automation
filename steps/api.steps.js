const { Given, When, Then } = require('@cucumber/cucumber');
const { request, expect } = require('@playwright/test');


let apiContext;
let response;
let token;


Given('que tengo un usuario autenticado por API', async function(){

    apiContext = await request.newContext({
        baseURL: 'https://thinking-tester-contact-list.herokuapp.com'
    });


    const login = await apiContext.post('/users/login', {
        data:{
            email:'ximenaqa2026@gmail.com',
            password:'Test123456'
        }
    });


    const body = await login.json();

    token = body.token;

});


When('envio una solicitud para crear un contacto', async function(){

    response = await apiContext.post('/contacts', {

        headers:{
            Authorization:`Bearer ${token}`
        },

        data:{
            firstName:"Api",
            lastName:"Testing",
            birthdate:"1990-01-01",
            email:"apitest@test.com",
            phone:"3009999999"
        }
    });

});


Then('el servicio responde exitosamente', async function(){

    expect(response.status()).toBe(201);

});