import { NgAvatarPage } from './app.po';

describe('ng-avatar App', () =>
{
	let page:NgAvatarPage;

	beforeEach(() =>
	{
		page = new NgAvatarPage();
	});

	it('should display message saying Ng Avatar', () =>
	{
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Ng Avatar');
	});
});
