/**
 * Created by justin on 5/15/17.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core'
import { AvatarService } from './avatar.service'

@Component({
	selector: 'gravatar',
	template: `
		<span class="control" (click)="Avatar('initials')">
			<small>
				<span class="fa fa-image" *ngIf="!updatingInitials"></span>
				<span class="fa fa-spinner fa-spin" *ngIf="updatingInitials"></span>
				initials
			</small>
		</span>
		&nbsp;
		<span class="control" id="random-gravatar" (click)="Avatar('gravatar')">
			<small>
				<span class="fa fa-image" *ngIf="!updatingGravatar"></span>
				<span class="fa fa-spinner fa-spin" *ngIf="updatingGravatar"></span>
				gravatar
			</small>
		</span>
	`
})
export class AvatarComponent
{
	updatingInitials = false;
	updatingGravatar = false;

	@Input() name:string;
	@Input() email:string;
	@Output() onSuccess:EventEmitter<string> = new EventEmitter<string>();

	constructor(private avatar:AvatarService) {}

	Avatar(type:'initials'|'gravatar')
	{
		type === 'initials' ? this.updatingInitials = true : this.updatingGravatar = true;
		const src = this.avatar.Avatar(type, this.name, this.email);
		type === 'initials' ? this.updatingInitials = false : this.updatingGravatar = false;
		return this.onSuccess.emit(src);
	}
}
