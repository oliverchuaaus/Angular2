import { MyHttpPage } from './app.po';

describe('my-http App', () => {
  let page: MyHttpPage;

  beforeEach(() => {
    page = new MyHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
