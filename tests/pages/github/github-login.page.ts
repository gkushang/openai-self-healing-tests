const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        usernameField: '[name="login"]',
        passwordField: '[name="password"]',
        signInButton: '[data-signin-label="Sign in INVALID"]'
    };

    login(username, password) {

        I.say('\nwaiting for this demo....', 'blue');
        I.wait(5)

        I.fillField(this.locators.usernameField, username);
        I.fillField(this.locators.passwordField, password);

        I.say('\ndemo: now, it is trying to click the INVALID locator and tests should throw an error. Then, tests will send a PROMPT to OpenAI for a suggested fix....', 'blue');
        I.wait(5)
        // this will fail due to INVALID locator
        I.click(this.locators.signInButton);
    }
}

export = new HomePage();
