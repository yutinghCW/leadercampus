function init () {
    audioId.addEventListener('ended', audioEnd, false)
    audioId.addEventListener('timeupdate', audioTimeUpdate, false)
    audioId.addEventListener('play', audioPlay, false)
    audioId.addEventListener('pause', audioPause, false)
}

function setKeyFrames (duration) {
    var quarter = (duration / 4).toFixed(1)
    sessionStorage.setItem('one', quarter)
    sessionStorage.setItem('two', (quarter * 2).toFixed(1))
    sessionStorage.setItem('three', (quarter * 3).toFixed(1))
}

function audioTimeUpdate () {
    var curTime = audioId.currentTime().toFixed(1)
    var range_one_min=parseInt(sessionStorage.getItem('one'),10)-1,
        range_one_max=parseInt(sessionStorage.getItem('one'),10)+1,
        range_two_min=parseInt(sessionStorage.getItem('two'),10)-1,
        range_two_max=parseInt(sessionStorage.getItem('two'),10)+1,
        range_three_min=parseInt(sessionStorage.getItem('three'),10)-1,
        range_three_max=parseInt(sessionStorage.getItem('three'),10)+1;
    if(curTime>range_one_min&&curTime<range_one_max){
        ga('send', 'event', 'audio', '25% audio played', audioTitle);
        sessionStorage.setItem('one', null);
    }else if(curTime>range_two_min&&curTime<range_two_max){
        ga('send', 'event', 'audio', '50% audio played', audioTitle);
        sessionStorage.setItem('two', null);
    }else if(curTime>range_three_min&&curTime<range_three_max){
        ga('send', 'event', 'audio', '75% audio played', audioTitle)
        sessionStorage.setItem('three', null)
    }
}

function audioEnd () {
    ga('send', 'event', 'audio', '100% audio played', audioTitle)
}

function audioPlay () {
    ga('send', 'event', 'audio', 'audio played', audioTitle)
    setKeyFrames(this.duration)
}

function audioPause () {
    ga('send', 'event', 'audio', 'audio paused', audioTitle)
}