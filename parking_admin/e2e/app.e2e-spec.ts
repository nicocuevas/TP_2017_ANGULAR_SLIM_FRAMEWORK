import { AngadminPage } from './app.po';

describe('angadmin App', () => {
  let page: AngadminPage;

  beforeEach(() => {
    page = new AngadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
