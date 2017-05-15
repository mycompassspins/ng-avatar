/**
 * Created by Justin on 5/15/17
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent
{
	title = 'Ng Avatar';

	SetImage(src:string)
	{
		document.getElementById('avatar').setAttribute('src', src);
	}
}
