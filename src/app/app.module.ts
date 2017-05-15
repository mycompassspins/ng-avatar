/**
 * Created by Justin on 5/15/17
 */

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { AvatarComponent } from './avatar/avatar.component'
import { AvatarService } from './avatar/avatar.service'

@NgModule({
	declarations: [
		AppComponent,
		AvatarComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		AvatarService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
