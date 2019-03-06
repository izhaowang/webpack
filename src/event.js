import $ from 'jquery';
import render from './render'
import {flag,playto , pauseto} from './control';
function event(data){
    
    let index = 0;
    let len = data.length;
    $('.prev-btn').click(()=>{

        if(index==0){
            index=len-1
        }else{
            index--
        }
        render(data[index]);
        if(flag){
            playto()
        }else pauseto();
    })
    $('.next-btn').click(()=>{
        if(index == len-1){
            index =0
        }else{
            index++
        }
        render(data[index]);
        if(flag){
            playto()
        }else pauseto();
    });
   
    $('.play-btn').click(playto);
    $('.pause-btn').click(pauseto);
}

export default event