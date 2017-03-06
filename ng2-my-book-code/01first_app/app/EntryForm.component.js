"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Entry_1 = require("./Entry");
var EntryFormComponent = (function () {
    function EntryFormComponent() {
        //need to  initialise, otherwise undefined
        this.entryList = [];
    }
    EntryFormComponent.prototype.submitEntry = function (title, link) {
        this.entryList.push(new Entry_1.Entry(title.value, link.value));
        //this to pass element, so can be reset to empty string. 
        title.value = "";
        link.value = "";
    };
    EntryFormComponent.prototype.sortedEntryList = function () {
        return this.entryList.sort(function (a, b) { return b.votes - a.votes; });
    };
    return EntryFormComponent;
}());
EntryFormComponent = __decorate([
    core_1.Component({
        selector: 'entry-form',
        template: "\n  Add an Entry:\n\n  <div>\n    Title: <input #title> \n  </div>\n  <div>\n    Link: <input #link> \n  </div>  \n  <div>\n    <button (click)=\"submitEntry(title, link)\">Submit</button> \n  </div>  \n\n  <hr/>\n  <div>Entries:<div>\n  <entry-item [entry]=\"entry\"  *ngFor=\"let entry of sortedEntryList()\"></entry-item>\n  "
    })
], EntryFormComponent);
exports.EntryFormComponent = EntryFormComponent;
//# sourceMappingURL=EntryForm.component.js.map