const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        usernameField: '[name="login"]',
        passwordField: '[name="password"]',
        signInButton: '[data-signin-label="Sign in Incorrect Locator"]'
    };

    login(username, password) {
        I.fillField(this.locators.usernameField, username);
        I.fillField(this.locators.passwordField, password);
        I.click(this.locators.signInButton);
    }
}

export = new HomePage();
