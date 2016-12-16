
const Countdown = {
    init: function () {
        target = document.querySelector("#countdown");
        target.textContent = Date.now();
        window.requestAnimationFrame(Countdown.update);
    },

    update: function () {
        let goalDate = moment("2017-12-10 15:00");
        let deltaTime = goalDate.diff(moment())
        let duration = moment.duration(deltaTime)
        target.innerHTML = Math.floor(duration.asHours()) + ' h <br>' + duration.minutes() + ' m <br>' + duration.seconds() + ' s';
        window.requestAnimationFrame(Countdown.update);
    }
}

Countdown.init();