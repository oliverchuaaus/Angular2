import { MyNestedFormsPage } from './app.po';

describe('my-nested-forms App', () => {
  let page: MyNestedFormsPage;

  beforeEach(() => {
    page = new MyNestedFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
