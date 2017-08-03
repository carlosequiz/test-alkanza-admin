import { TestAlkanzaAdminPage } from './app.po';

describe('test-alkanza-admin App', () => {
  let page: TestAlkanzaAdminPage;

  beforeEach(() => {
    page = new TestAlkanzaAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
