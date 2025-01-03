export { };
const { I, githubLoginPage } = inject();

Before(() => {
    I.amOnPage('/login/');
});

When(/he logs into Github/, () => {
    // pause();
    githubLoginPage.login('xyz', '****');
    I.wait(10); //hard-coded wait to see the actions for demo
});

Given(/Fred is on Github LoginPage/, () => {
    // add required code here (skipping this code due to AI Example is the focus here)
});


Then(/he sees his account information/, async () => {
    // add assertions here (skipping this code due to AI Example is the focus here)
});
