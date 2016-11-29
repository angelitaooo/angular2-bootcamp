import { AppStructurePage } from './app.po';

describe('app-structure App', function() {
  let page: AppStructurePage;

  beforeEach(() => {
    page = new AppStructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
