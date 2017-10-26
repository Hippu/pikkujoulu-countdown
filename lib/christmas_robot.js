'use strict';

var player;
var christmas_robot = function christmas_robot() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";

    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

var onYouTubePlayerAPIReady = function onYouTubePlayerAPIReady() {
    player = new YT.Player('christmas-robot', {
        height: "100%",
        width: "600px",
        videoId: 'q-43GXLnjTo',
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            modestbranding: 1,
            showinfo: 0,
            playlist: 'q-43GXLnjTo'
        }
    });
};
christmas_robot();