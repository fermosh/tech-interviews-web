"use strict";
var Question = (function () {
    function Question(_questionId, _question) {
        this.questionId = _questionId;
        this.question = _question;
        this.comments = "";
        this.rating = 0;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map