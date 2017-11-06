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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var avatar_component_1 = require("./avatar.component");
var avatar_service_1 = require("./avatar.service");
var NgAvatarModule = /** @class */ (function () {
    function NgAvatarModule(parentModule) {
        if (parentModule)
            throw new Error('NgAvatarModule is already loaded. Import it in the AppModule only');
    }
    NgAvatarModule_1 = NgAvatarModule;
    NgAvatarModule.forRoot = function () {
        return {
            ngModule: NgAvatarModule_1,
            providers: [avatar_service_1.AvatarService]
        };
    };
    NgAvatarModule = NgAvatarModule_1 = __decorate([
        core_1.NgModule({
            declarations: [avatar_component_1.AvatarComponent],
            imports: [common_1.CommonModule],
            providers: [avatar_service_1.AvatarService],
            exports: [avatar_component_1.AvatarComponent]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [NgAvatarModule])
    ], NgAvatarModule);
    return NgAvatarModule;
    var NgAvatarModule_1;
}());
exports.NgAvatarModule = NgAvatarModule;
