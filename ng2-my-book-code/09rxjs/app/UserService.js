"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var UserService = (function () {
    function UserService() {
        this.currentUser = new rxjs_1.BehaviorSubject(null);
    }
    UserService.prototype.setCurrentUser = function (newUser) {
        this.currentUser.next(newUser);
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map