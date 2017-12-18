import { SingingClubPage } from './app.po';

describe('singing-club App', () => {
  let page: SingingClubPage;

  beforeEach(() => {
    page = new SingingClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
