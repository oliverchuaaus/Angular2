import { NgxPocPage } from './app.po';

describe('ngx-poc App', () => {
  let page: NgxPocPage;

  beforeEach(() => {
    page = new NgxPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
