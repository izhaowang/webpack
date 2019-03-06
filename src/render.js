import $ from 'jquery';
import {changeTime} from './time';
function renderInfo (data) {
    const html =`
    <h3 class="song-name">${data.song}</h3>
    <h4 class="singer-name">${data.singer}</h4>
    <h4 class="album-name">${data.album}</h4>
    `
    $('.song-describe').html(html)
}
function renderImg (img){
    $('.song-picture').css({'background':`url(${img})`});
}
function renderSrc (data){
    $('.oAudio').prop('src',data);
}
function Likebtn (isLike){
    if(isLike){
        $('.like-btn').addClass('liked');
    }else{
        $('.like-btn').removeClass('liked');
    }
}
function renderTime(data){
    const alltime =changeTime(data.duration);
    $('.all-time').html(alltime);
    
}
export default (data)=>{
    renderInfo(data);
    renderImg(data.image);
    Likebtn(data.isLike);
    renderSrc(data.audio)
    renderTime(data)
}