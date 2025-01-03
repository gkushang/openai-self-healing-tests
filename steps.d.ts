/// <reference types='codeceptjs' />
type githubLoginPage = typeof import('./tests/pages/github/github-login.page');
type page = typeof import('codeceptjs-configure/lib/helpers/global.page.js');
type PlaywrightHelper = import('codeceptjs-configure/lib/helpers/playwright.helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, githubLoginPage: githubLoginPage, page: page }
  interface Methods extends REST, Playwright, PlaywrightHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
