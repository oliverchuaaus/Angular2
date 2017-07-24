import { HelloMobile2Page } from './app.po';

describe('hello-mobile2 App', () => {
  let page: HelloMobile2Page;

  beforeEach(() => {
    page = new HelloMobile2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
