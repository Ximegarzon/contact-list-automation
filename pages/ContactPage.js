class ContactPage {

    constructor(page){
        this.page = page;
        this.addButton = '#add-contact';
        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.birthdate = '#birthdate';
        this.email = '#email';
        this.phone = '#phone';
        this.submit = '#submit';
    }


    async createContact(){

        await this.page.click(this.addButton);

        await this.page.fill(
            this.firstName, 
            'Carlos'
        );

        await this.page.fill(
            this.lastName, 
            'QA'
        );

        await this.page.fill(
            this.birthdate,
            '1995-01-01'
        );

        await this.page.fill(
            this.email,
            'carlosqa@test.com'
        );

        await this.page.fill(
            this.phone,
            '3001234567'
        );

        await this.page.click(this.submit);
    }
}

module.exports = ContactPage;