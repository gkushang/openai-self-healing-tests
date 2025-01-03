// load env variables - this should be the first line of config
require('dotenv-extended').config({
    path: './tests/config/codecept.dev.env',
    defaults: './tests/config/codecept.env',
});
require('./heal');
require('ts-node/register');

const { configure, cleanReports } = require('codeceptjs-configure');
const REPORT_OUTPUT_DIR = './tests/report';

let conf = {
    name: 'Codeceptjs BDD Acceptance Tests',

    repository: 'https://github.com/salesforce/codeceptjs-bdd',

    output: REPORT_OUTPUT_DIR,

    bootstrap: (callback) => {
        cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: '/', callback });
    },

    helpers: {
        PlaywrightHelper: {
            require: 'codeceptjs-configure/lib/helpers/playwright.helper.js',
        },
    },

    ai: {
        request: async (messages) => {
            const OpenAI = require('openai');
            const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] })

            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo-0125',
                messages,
            });

            return completion?.choices[0]?.message?.content;
        }
    },

    plugins: {
        allure: {
            enabled: true,
            require: '@codeceptjs/allure-legacy',
        },
        retryFailedTests: {
            enabled: false,
            retries: 1,
            require: 'codeceptjs-configure/plugins/retry-failed-tests.plugin.js',
        },
        heal: {
            enabled: true
        }
    },
};


exports.config = configure.create(conf);
