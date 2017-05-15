/**
 * Created by justin on 5/15/17.
 */

import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AvatarComponent } from './avatar.component'
import { AvatarService } from './avatar.service'

@NgModule({
	declarations: [AvatarComponent],
	imports: [CommonModule],
	providers: [AvatarService],
	exports: [AvatarComponent]
})
export class NgAvatarModule
{
	static forRoot():ModuleWithProviders
	{
		return {
			ngModule: NgAvatarModule,
			providers: [AvatarService]
		}
	}

	constructor (@Optional() @SkipSelf() parentModule:NgAvatarModule)
	{
		if (parentModule)
			throw new Error(
				'NgAvatarModule is already loaded. Import it in the AppModule only');
	}
}
