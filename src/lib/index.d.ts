/**
 * Created by justin on 11/6/17.
 */

import { ModuleWithProviders, EventEmitter } from '@angular/core'
import * as AvatarInitials from 'avatar-initials/build/avatar.js'

declare type AvatarType = 'initials'|'gravatar';
declare type GravatarType = 'mm'|'identicon'|'monsterid'|'wavatar'|'retro'|'';

export declare class NgAvatarModule
{
    static forRoot():ModuleWithProviders
}

export declare class AvatarService
{
    Avatar(type:AvatarType, name?:string, email?:string):string;
    GenerateAvatar(elem:HTMLElement, name:string, email?:string):AvatarInitials;
    private _getInitials(name:string ,delimeter:string):string;
    private _getRandomColorScheme():any;
    private _getRandomGravatar():GravatarType;
    private _randomNoRepeats(array:Array<any>):string|any;
}

export declare class AvatarComponent
{
    updatingInitials:boolean;
    updatingGravatar:boolean;

    name:string;
    email:string;
    onSuccess:EventEmitter<string>;
    private avatar:AvatarService;

    Avatar(type:'initials'|'gravatar'):EventEmitter<string>;
}
