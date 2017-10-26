"use strict";

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countdown = {
    init: function init() {
        target = document.querySelector("#countdown");
        target.textContent = Date.now();
        window.requestAnimationFrame(Countdown.update);
    },

    update: function update() {
        var goalDate = (0, _moment2.default)("2017-12-10 15:00");
        var deltaTime = goalDate.diff((0, _moment2.default)());
        var duration = _moment2.default.duration(deltaTime);
        target.innerHTML = Math.floor(duration.asHours()) + ' h <br>' + duration.minutes() + ' m <br>' + duration.seconds() + ' s';
        window.requestAnimationFrame(Countdown.update);
    }
};

Countdown.init();