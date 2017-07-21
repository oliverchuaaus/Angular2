import { NgMyAppPage } from './app.po';

describe('ng-my-app App', () => {
  let page: NgMyAppPage;

  beforeEach(() => {
    page = new NgMyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
