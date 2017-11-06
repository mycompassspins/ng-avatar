"use strict";
/**
 * Created by justin on 5/15/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var avatar_service_1 = require("./avatar.service");
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(avatar) {
        this.avatar = avatar;
        this.updatingInitials = false;
        this.updatingGravatar = false;
        this.onSuccess = new core_1.EventEmitter();
    }
    AvatarComponent.prototype.Avatar = function (type) {
        if (type === 'initials' && !this.name)
            throw new ReferenceError('Name is required in order to generate initials avatar');
        if (type === 'gravatar' && !this.email)
            throw new ReferenceError('Email is required in order to generate Gravatar');
        type === 'initials' ? this.updatingInitials = true : this.updatingGravatar = true;
        var src = this.avatar.Avatar(type, this.name, this.email);
        type === 'initials' ? this.updatingInitials = false : this.updatingGravatar = false;
        return this.onSuccess.emit(src);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "email", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AvatarComponent.prototype, "onSuccess", void 0);
    AvatarComponent = __decorate([
        core_1.Component({
            selector: 'ng-avatar',
            template: "\n\t\t<span class=\"control\" (click)=\"Avatar('initials')\">\n\t\t\t<small>\n\t\t\t\t<span class=\"fa fa-image\" *ngIf=\"!updatingInitials\"></span>\n\t\t\t\t<span class=\"fa fa-spinner fa-spin\" *ngIf=\"updatingInitials\"></span>\n\t\t\t\tinitials\n\t\t\t</small>\n\t\t</span>\n\t\t&nbsp;\n\t\t<span class=\"control\" id=\"random-gravatar\" (click)=\"Avatar('gravatar')\">\n\t\t\t<small>\n\t\t\t\t<span class=\"fa fa-image\" *ngIf=\"!updatingGravatar\"></span>\n\t\t\t\t<span class=\"fa fa-spinner fa-spin\" *ngIf=\"updatingGravatar\"></span>\n\t\t\t\tgravatar\n\t\t\t</small>\n\t\t</span>\n\t"
        }),
        __metadata("design:paramtypes", [avatar_service_1.AvatarService])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
