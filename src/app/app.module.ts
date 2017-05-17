/**
 * Created by Justin on 5/15/17
 */

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { NgAvatarModule } from './avatar'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgAvatarModule.forRoot()
	],
	providers: [

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
