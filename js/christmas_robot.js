var player;
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let loading_div = document.getElementById('loading-card');

const loading_ready = function() {
    
    loading_div.innerHTML = "<h1>PRESS TO GET HYPE</h1>"
    loading_div.addEventListener("click", start_the_shitshow);
}

const start_the_shitshow = function() {
    player.playVideo();
    loading_div.innerHTML = "<h1>HYPE!</h1>"
    document.body.classList.add("scrolling");
    setInterval(card_interval, 1000)
    document.getElementsByClassName('content')[0].classList.add('animated');
}

const cards = card_switcher();

const card_interval = function() {cards.next()};

function* card_switcher() {
    let cards = document.getElementsByClassName("card");
    let index = 0;
    let max = cards.length;
    while (1) {
        cards[(index % max)].classList.remove("current-card");
        index++;
        cards[(index % max)].classList.add("current-card");
        console.log(index % max);
        yield index;
    } 
}

let screen_size = function () {
    if (window.matchMedia("(min-height: 720px)").matches) {
        return {"width": "1280px", "height": "720px"};
    } else {
        return {"width": "320px", "height": "240px"};
    }
}

function onYouTubePlayerAPIReady() {
        player = new YT.Player('christmas-robot', {
            height: screen_size().height,
            width: screen_size().width,
            videoId: 'q-43GXLnjTo',
            events: {
                'onReady': loading_ready
            },
            playerVars: {
                autoplay: 0,
                loop: 1,
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
                playlist: 'q-43GXLnjTo'
            }
        });
}