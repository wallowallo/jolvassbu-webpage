import { JolvassbuPage } from './app.po';

describe('jolvassbu App', function() {
  let page: JolvassbuPage;

  beforeEach(() => {
    page = new JolvassbuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
