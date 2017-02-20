"use strict";
var question_1 = require("../BO/question");
var Skill = (function () {
    function Skill(_skillId, _skillName, _topic, _startingFrom, _priority, _questions) {
        this.skillId = _skillId;
        this.skillName = _skillName;
        this.topic = _topic;
        this.startingFrom = _startingFrom;
        this.priority = _priority;
        this.questions = _questions.map(function (item) { return new question_1.Question(item.questionId, item.question); });
    }
    Object.defineProperty(Skill.prototype, "priorityStyle", {
        get: function () {
            var priorityStyle = this.priority.toLowerCase().trim().replace(" ", "-");
            return "priority-" + priorityStyle + "-label-value";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "rating", {
        get: function () {
            var sum = 0;
            if (this.questions && this.questions.length > 0) {
                for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
                    var question = _a[_i];
                    sum += question.rating;
                }
                return sum / this.questions.length;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "ratingStyle", {
        get: function () {
            var ratingStyle = "score-label-value-";
            switch (true) {
                case (this.rating == 0):
                    ratingStyle += "0";
                    break;
                case (this.rating < 2):
                    ratingStyle += "1";
                    break;
                case (this.rating < 3):
                    ratingStyle += "2";
                    break;
                case (this.rating < 4):
                    ratingStyle += "3";
                    break;
                case (this.rating < 5):
                    ratingStyle += "4";
                    break;
                case (this.rating == 5):
                    ratingStyle += "5";
                    break;
                default:
                    ratingStyle += "0";
            }
            return ratingStyle;
        },
        enumerable: true,
        configurable: true
    });
    return Skill;
}());
exports.Skill = Skill;
//# sourceMappingURL=skill.js.map