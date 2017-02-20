"use strict";
var skill_1 = require("../BO/skill");
var exercise_1 = require("../BO/exercise");
var ScriptViewer = (function () {
    function ScriptViewer(_competencyId, _competencyName, _domain, _levelName, _levelDescription, _skills, _exercises) {
        this.competencyId = _competencyId;
        this.competencyName = _competencyName;
        this.domain = _domain;
        this.levelName = _levelName;
        this.levelDescription = _levelDescription;
        this.skills = _skills.map(function (item) { return new skill_1.Skill(item.skillId, item.skillName, item.topic, item.startingFrom, item.priority, item.questions); });
        this.exercises = _exercises.map(function (item) { return new exercise_1.Exercise(item.id, item.title, item.description); });
    }
    Object.defineProperty(ScriptViewer.prototype, "rating", {
        get: function () {
            var sum = 0;
            if (this.skills && this.skills.length > 0) {
                for (var _i = 0, _a = this.skills; _i < _a.length; _i++) {
                    var skill = _a[_i];
                    sum += skill.rating;
                }
            }
            if (this.exercises && this.exercises.length > 0) {
                for (var _b = 0, _c = this.exercises; _b < _c.length; _b++) {
                    var exercise = _c[_b];
                    sum += exercise.rating;
                }
            }
            if (sum > 0) {
                return sum / (this.skills.length + this.exercises.length);
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ScriptViewer;
}());
exports.ScriptViewer = ScriptViewer;
//# sourceMappingURL=script-viewer.js.map