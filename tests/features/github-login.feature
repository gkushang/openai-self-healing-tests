@github
Feature: Github Login

              In order to see my github account
              As a Github user
              I want to be able to login to Github



        @login_github
        Scenario: Fred should be able to login to Github

            Given Fred is on Github LoginPage
            When he logs into Github
            Then he sees his account information
