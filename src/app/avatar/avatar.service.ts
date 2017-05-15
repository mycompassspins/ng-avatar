/**
 * Created by justin on 5/15/17.
 */

import { Injectable } from '@angular/core'
import * as AvatarInitials from 'avatar-initials/build/avatar.js'

type GravatarType = 'mm'|'identicon'|'monsterid'|'wavatar'|'retro'|'';
type AvatarType = 'initials'|'gravatar';

@Injectable()
export class AvatarService
{
	Avatar(type:AvatarType, name?:string, email?:string):string
	{
		const img:HTMLElement = document.createElement('img');

		if (type === 'initials' && !name)
			throw new ReferenceError('Name is required in order to generate initials avatar');

		if (type === 'gravatar' && !email)
			throw new ReferenceError('Email is required in order to generate Gravatar');

		const avatar =
			type === 'initials' ?
				this.GenerateAvatar(img, name) :
				this.GenerateAvatar(img, name, email);

		return avatar.element.src;
	}

	GenerateAvatar(elem:HTMLElement, name:string, email?:string):AvatarInitials
	{
		if (email)
		{
			return new AvatarInitials(elem, {
				useGravatar: true,
				email,
				fallback: this._getRandomGravatar(),
				rating: 'x',
				allowGravatarFallback: true
			});
		}
		else
		{
			const initials:string = this._getInitials(name, ' '),
				colorScheme = this._getRandomColorScheme();

			return new AvatarInitials(elem, {
				useGravatar: false,
				initials: initials,
				initial_fg: colorScheme.fg,
				initial_bg: colorScheme.bg
			});
		}
	}

	private _getInitials(name:string ,delimeter:string):string
	{

		const array = name.split(delimeter);
		let ret:string;

		switch(array.length)
		{
			case 1:
				ret = array[0].charAt(0).toUpperCase();
				break;
			default:
				ret = array[0].charAt(0).toUpperCase() + array[ array.length -1 ].charAt(0).toUpperCase();
		}

		return ret;
	}

	private _getRandomColorScheme():any
	{
		const black = '#000', white = '#fff', offWhite = '#f4f6f7', purple = '#7e57c2', darkGray = '#888',
			red = '#d9534f', orange = '#f0ad4e', darkBlue = '#0275d8', lightBlue = '#5bc0de';

		const schemes = [
			{ bg: black, fg: offWhite },
			{ bg: purple, fg: white },
			{ bg: offWhite, fg: darkGray },
			{ bg: red, fg: white },
			{ bg: orange, fg: white },
			{ bg: darkBlue, fg: white },
			{ bg: lightBlue, fg: darkBlue },
			{ bg: lightBlue, fg: white },
			{ bg: darkBlue, fg: lightBlue },
			{ bg: darkBlue, fg: white }
		];

		return this._randomNoRepeats(schemes);
	}

	private _getRandomGravatar():GravatarType
	{
		const defaults:string[] = ['mm', 'identicon', 'monsterid', 'wavatar', 'retro', ''];
		return this._randomNoRepeats(defaults);
	}

	private _randomNoRepeats(array:Array<any>):string|any
	{
		let copy = array.slice(0);
		if (copy.length < 1) copy = array.slice(0);
		const index = Math.floor(Math.random() * copy.length);
		const item = copy[index];
		copy.splice(index, 1);
		return item;
	}
}

