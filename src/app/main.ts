/**
 * Created by Justin on 11/6/17.
 */

import 'reflect-metadata/Reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
	.then(() =>
	{
		console.log(
			`Revelry and awe are afoot at http://localhost:3000 in development mode`
		);
	})
	.catch((error:any) => { console.error(error) });
