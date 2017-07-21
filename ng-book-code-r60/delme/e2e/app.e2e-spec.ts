import { DelmePage } from './app.po';

describe('delme App', () => {
  let page: DelmePage;

  beforeEach(() => {
    page = new DelmePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
