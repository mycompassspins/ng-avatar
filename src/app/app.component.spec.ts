import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { AvatarComponent } from './avatar/avatar.component'
import { AvatarService } from './avatar/avatar.service'

describe('AppComponent', () =>
{
	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				AvatarComponent
			],
			providers: [
				AvatarService
			]
		}).compileComponents();
	}));

	it('should create the app', async(() =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'Ng Avatar'`, async(() =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Ng Avatar');
	}));

	it('should render title in an h1 tag', async(() =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Ng Avatar');
	}));
});
