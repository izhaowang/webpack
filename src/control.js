import $ from 'jquery';
import {setTime} from './time'
let oAudio = document.getElementsByClassName('oAudio')[0];
let flag =false;
let timer;
function playto (){
    oAudio.play();
    flag = true; 
    $('.play-btn').css("display","none");
    $('.pause-btn').css("display","block");
    $('.song-picture').addClass('move');
    timer = setInterval(setTime,300)
}
function pauseto(){
    oAudio.pause();
    flag = false;
    $('.play-btn').css("display","block");
    $('.pause-btn').css("display","none");
    $('.song-picture').removeClass('move');
    clearInterval(timer)
}
export {flag, playto,pauseto}