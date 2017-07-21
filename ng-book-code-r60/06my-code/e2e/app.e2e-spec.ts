import { MyCodePage } from './app.po';

describe('my-code App', () => {
  let page: MyCodePage;

  beforeEach(() => {
    page = new MyCodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
