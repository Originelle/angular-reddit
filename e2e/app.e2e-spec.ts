import { AngularRedditPage } from './app.po';

describe('angular-reddit App', () => {
  let page: AngularRedditPage;

  beforeEach(() => {
    page = new AngularRedditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
