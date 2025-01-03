const { I } = inject();

// page class can be extended
class HomePage {
    locators = {
        searchIcon: '.header-search-button',
    };

    search(searchFor) {
        I.click(this.locators.searchIcon);
        I.say(`searching for ${searchFor}...`, 'blue');

        I.wait(2); //hard-coded wait to see the actions for demo
        // ... add more code (skipping due to focus is on AI example)
    }
}

export = new HomePage();
