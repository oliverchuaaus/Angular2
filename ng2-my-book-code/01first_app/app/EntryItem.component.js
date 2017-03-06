"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EntryItemComponent = (function () {
    function EntryItemComponent() {
    }
    EntryItemComponent.prototype.upVote = function (entry) {
        entry.upVote();
    };
    EntryItemComponent.prototype.downVote = function (entry) {
        entry.downVote();
    };
    return EntryItemComponent;
}());
EntryItemComponent = __decorate([
    core_1.Component({
        selector: 'entry-item',
        template: "\n  <h1>Entry Item</h1>\n  <div>Title: {{entry.title}} </div>  \n  <div>Link: {{entry.link}}</div>\n  <div>Votes: {{entry.votes}}</div>\n  <button (click)=\"downVote(entry)\">Down Vote</button>\n  <button (click)=\"upVote(entry)\">Up Vote</button>\n  ",
        inputs: ['entry'],
    })
], EntryItemComponent);
exports.EntryItemComponent = EntryItemComponent;
//# sourceMappingURL=EntryItem.component.js.map