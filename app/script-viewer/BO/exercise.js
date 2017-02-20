"use strict";
var Exercise = (function () {
    function Exercise(_id, _title, _description) {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.comments = "";
        this.rating = 0;
    }
    return Exercise;
}());
exports.Exercise = Exercise;
//# sourceMappingURL=exercise.js.map