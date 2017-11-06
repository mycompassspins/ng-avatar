/**
 * Created by Justin on 5/15/17
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1>
			{{ title }}
		</h1>

		<img src="" alt="" id="avatar">

		<br>

		<ng-avatar [name]="name" [email]="email" (onSuccess)="SetImage($event)"></ng-avatar>
	`
})
export class AppComponent
{
	title = 'Ng Avatar';
	name = 'Fake Person';
	email = 'fake@example.com';

	SetImage(src:string)
	{
		document.getElementById('avatar').setAttribute('src', src);
	}
}
