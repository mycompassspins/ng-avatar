/**
 * Created by justin on 5/15/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AvatarInitials = require("avatar-initials/build/avatar.js");
var AvatarService = (function () {
    function AvatarService() {
    }
    AvatarService.prototype.Avatar = function (type, name, email) {
        var img = document.createElement('img');
        if (type === 'initials' && !name)
            throw new ReferenceError('Name is required in order to generate initials avatar');
        if (type === 'gravatar' && !email)
            throw new ReferenceError('Email is required in order to generate Gravatar');
        var avatar = type === 'initials' ?
            this.GenerateAvatar(img, name) :
            this.GenerateAvatar(img, name, email);
        return avatar.element.src;
    };
    AvatarService.prototype.GenerateAvatar = function (elem, name, email) {
        if (email) {
            return new AvatarInitials(elem, {
                useGravatar: true,
                email: email,
                fallback: this._getRandomGravatar(),
                rating: 'x',
                allowGravatarFallback: true
            });
        }
        else {
            var initials = this._getInitials(name, ' '), colorScheme = this._getRandomColorScheme();
            return new AvatarInitials(elem, {
                useGravatar: false,
                initials: initials,
                initial_fg: colorScheme.fg,
                initial_bg: colorScheme.bg
            });
        }
    };
    AvatarService.prototype._getInitials = function (name, delimeter) {
        var array = name.split(delimeter);
        var ret;
        switch (array.length) {
            case 1:
                ret = array[0].charAt(0).toUpperCase();
                break;
            default:
                ret = array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
        }
        return ret;
    };
    AvatarService.prototype._getRandomColorScheme = function () {
        var black = '#000', white = '#fff', offWhite = '#f4f6f7', purple = '#7e57c2', darkGray = '#888', red = '#d9534f', orange = '#f0ad4e', darkBlue = '#0275d8', lightBlue = '#5bc0de';
        var schemes = [
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
    };
    AvatarService.prototype._getRandomGravatar = function () {
        var defaults = ['mm', 'identicon', 'monsterid', 'wavatar', 'retro', ''];
        return this._randomNoRepeats(defaults);
    };
    AvatarService.prototype._randomNoRepeats = function (array) {
        var copy = array.slice(0);
        if (copy.length < 1)
            copy = array.slice(0);
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index, 1);
        return item;
    };
    return AvatarService;
}());
AvatarService = __decorate([
    core_1.Injectable()
], AvatarService);
exports.AvatarService = AvatarService;
