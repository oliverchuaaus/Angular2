import { NgxMyTestingPage } from './app.po';

describe('ngx-my-testing App', () => {
  let page: NgxMyTestingPage;

  beforeEach(() => {
    page = new NgxMyTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
