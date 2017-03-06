"use strict";
var Entry = (function () {
    function Entry(title, link) {
        this.title = title;
        this.link = link;
        this.votes = 0;
    }
    Entry.prototype.upVote = function () {
        this.votes++;
    };
    Entry.prototype.downVote = function () {
        this.votes--;
    };
    return Entry;
}());
exports.Entry = Entry;
//# sourceMappingURL=Entry.js.map