import { MyAngularRedditPage } from './app.po';

describe('my-angular-reddit App', () => {
  let page: MyAngularRedditPage;

  beforeEach(() => {
    page = new MyAngularRedditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
