function init () {
    videoId.addEventListener('ended', videoEnd, false)
    videoId.addEventListener('timeupdate', videoTimeUpdate, false)
    videoId.addEventListener('play', videoPlay, false)
    videoId.addEventListener('pause', videoPause, false)
}

function setKeyFrames (duration) {
    var quarter = (duration / 4).toFixed(1)
    sessionStorage.setItem('one', quarter)
    sessionStorage.setItem('two', (quarter * 2).toFixed(1))
    sessionStorage.setItem('three', (quarter * 3).toFixed(1))
}

function videoTimeUpdate () {
    var curTime = videoId.currentTime().toFixed(1)
    var range_one_min=parseInt(sessionStorage.getItem('one'),10)-1,
        range_one_max=parseInt(sessionStorage.getItem('one'),10)+1,
        range_two_min=parseInt(sessionStorage.getItem('two'),10)-1,
        range_two_max=parseInt(sessionStorage.getItem('two'),10)+1,
        range_three_min=parseInt(sessionStorage.getItem('three'),10)-1,
        range_three_max=parseInt(sessionStorage.getItem('three'),10)+1;
    if(curTime>range_one_min&&curTime<range_one_max){
        ga('send', 'event', 'video', '25% video played', videoTitle)
            sessionStorage.setItem('one', null)
    }else if(curTime>range_two_min&&curTime<range_two_max){
        ga('send', 'event', 'video', '50% video played', videoTitle)
            sessionStorage.setItem('two', null)
    }else if(curTime>range_three_min&&curTime<range_three_max){
        console.log(curTime)
        ga('send', 'event', 'video', '75% video played', videoTitle)
            sessionStorage.setItem('three', null)
    }
}

function videoEnd () {
    ga('send', 'event', 'video', '100% video played', videoTitle)
}

function videoPlay () {
    ga('send', 'event', 'video', 'video played', videoTitle)
    setKeyFrames(this.duration)
}

function videoPause () {
    ga('send', 'event', 'video', 'video paused', videoTitle)
}