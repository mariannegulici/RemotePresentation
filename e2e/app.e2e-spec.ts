import { RemotePresentationPage } from './app.po';

describe('remote-presentation App', function() {
  let page: RemotePresentationPage;

  beforeEach(() => {
    page = new RemotePresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
