const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        usernameField: '[name="login"]',
        passwordField: '[name="password"]',
        signInButton: '[data-signin-label="Sign in INVALID"]'
    };

    login(username, password) {

        I.wait(10)
        I.say('waiting for this demo....', 'blue');

        I.fillField(this.locators.usernameField, username);
        I.fillField(this.locators.passwordField, password);

        // this will fail due to INVALID locator
        I.click(this.locators.signInButton);
    }
}

export = new HomePage();
