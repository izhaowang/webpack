import $ from 'jquery';
let oAudio = document.getElementsByClassName('oAudio')[0];
let ocurrent_top = document.getElementsByClassName('current-pro')[0];
let oLeft =window.getComputedStyle(ocurrent_top).left||document.defaultView.getComputedStyle(ocurrent_top).left;
function changeTime(time){
    const sec = parseInt(time%60) <10? "0"+parseInt(time%60) : parseInt(time%60);
    const min =parseInt(time/60) <10?  "0" +parseInt(time/60) : parseInt(time/60) ;
    return min + ":" + sec;
}
const setTime =function(){
    const curtime =changeTime(oAudio.currentTime)
    console.log(curtime)
    $('.curt').html(curtime);
    const w =oAudio.currentTime / oAudio.duration * 205;
    const p =oAudio.currentTime / oAudio.duration * 205;
    oLeft = parseInt(oLeft);
    $('.pro').width(w);
   ocurrent_top.style.left = oLeft + p +'px';
}
export {changeTime,setTime}
