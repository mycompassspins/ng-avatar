# NgAvatar

This library is an Angular wrapper around the [avatar-initials](https://github.com/MatthewCallis/avatar) library by [@MatthewCallis](https://github.com/MatthewCallis).

## Usage

### Component + Service

`AppModule.ts`

```typescript
import { NgModule } from '@angular/core'
import { NgAvatarModule, AvatarService } from 'ng-avatar'
import { AppComponent } from 'app.component'

// Optional styles
import 'ng-avatar/avatar.scss'

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		NgAvatarModule.forRoot()
	],
	providers: [
		AvatarService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
```

`AppComponent`

```typescript
import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	template: `
		<img alt="" src="" id="avatar-image">
		<ng-avatar name="John Doe" email="john@johndoe.com" (onSuccess)="setImage($event)></ng-gravatar>
	`
})
export class AppComponent
{
	setImage(src:string)
	{
		document.getElementById('avatar-image').setAttribute('src', src);
	}
}
```

### Just The Service

```typescript
import { AvatarService } from 'ng-avatar'
import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	template: `
		<img alt="" src="" id="avatar-image">
		<button type="button" (click)="setImage()">Get Avatar</button>
	`
})
export class AppComponent
{
	constructor(private avatar:AvatarService) {}
	
	setImage()
	{
		let initials:string = this.avatar.Avatar('initials', 'John Doe'),
			gravatar:string = this.avatar.Avatar('gravatar', 'John Doe', 'john@johndoe.com');
		
		document.getElementById('avatar-image').setAttribute('src', initials);
	}
}
```

# Run in Development
`$ npm start`

# Build for NPM
`$ npm run build`
