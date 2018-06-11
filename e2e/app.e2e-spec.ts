import { ShoppingProjectPage } from './app.po';

describe('shopping-project App', function() {
  let page: ShoppingProjectPage;

  beforeEach(() => {
    page = new ShoppingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
