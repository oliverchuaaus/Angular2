import { NgxCoursesPage } from './app.po';

describe('ngx-courses App', () => {
  let page: NgxCoursesPage;

  beforeEach(() => {
    page = new NgxCoursesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
