import { PluginPage } from './app.po';

describe('plugin App', () => {
  let page: PluginPage;

  beforeEach(() => {
    page = new PluginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
