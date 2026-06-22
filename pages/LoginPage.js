class LoginPage {

    constructor(page){
        this.page = page;
        this.emailInput = '#email';
        this.passwordInput = '#password';
        this.loginButton = '#submit';
    }

    async navigate(){
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    }

    async login(email, password){
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;