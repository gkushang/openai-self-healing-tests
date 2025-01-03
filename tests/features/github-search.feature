@search
Feature: Search Github

              In order to see Github Search works
              As a Github user
              I want to be able to search for repository



        @search_results
        Scenario: Fred should see the highlighted results for the searched repository

            Given Fred is on Github Homepage
            When he searches for the "salesforce/codeceptjs-bdd"
            Then he sees all the detailed highlighted results including description or license info and many more
