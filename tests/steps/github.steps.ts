export { };
const { I, githubHomePage } = inject();

Before(() => {
    I.amOnPage('/#/');
});

When(/he searches for the \"([^\"]*)\"/, (searchFor) => {
    githubHomePage.search(searchFor);
});

Given(/Fred is on Github Homepage/, () => {
    // add required code here (skipping this code due to AI Example is the focus here)
});


Then(/he sees all the detailed highlighted results including description or license info and many more/, async () => {
    // add assertions here (skipping this code due to AI Example is the focus here)
});
