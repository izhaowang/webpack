import './css/index.css';
import $ from 'jquery';
import render from './render';
import event from './event';

$.ajax({
    url: 'https://www.easy-mock.com/mock/5c7e8f95d811a611ca8c9364/example/https:/www.easy-mock.com/mock/5c7e8f95d811a611ca8c9364/example/mock',
    type: "GET",
    success(message){
        const data =message.data;
        render(data[0]);
        event(data);
    }
})