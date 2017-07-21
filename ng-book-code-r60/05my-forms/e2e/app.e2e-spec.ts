import { MyFormPage } from './app.po';

describe('my-form App', () => {
  let page: MyFormPage;

  beforeEach(() => {
    page = new MyFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
