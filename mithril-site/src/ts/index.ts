import m, { Vnode } from 'mithril';
import '../scss/main.scss';
import  $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import '../scss/sidebar.scss'

import {MainWindow} from "./views/MainWindow";

m.mount(document.body, MainWindow);
    

$(document).ready( () => {
 
    $('#sidebar-collapse').on('click',  () => {
        $('.sidebar').toggleClass('active');
    })
 
    $('.vote').click(function(e) {
        var id = $(e.target).attr('name')
        
        // m.request({
        //     method: "PATCH",
        //     url: "http://localhost:3000/messages/" + 4 + "/vote",
        //     data: { user_id: 2 },
        // })
        // .then((result: any) => {
        //    console.log(result);
        // })
        // .catch((result: Error) => {
        //     console.log(result);
        // })

        
        m.request({
            method: "PUT",
            url: "http://localhost:3000/messages/5",
            data: { text: "Hey. Check out this very long message! I'm very excited for the new things I will learn. Hopefully it will be the way I was expecting." },
        })
        .then((result: any) => {
           console.log(result);
        })
        .catch((result: Error) => {
            console.log(result);
        })
    
        return false;
    });
})

window.addEventListener('resize', () => {
    if(window.innerHeight < window.innerWidth){
        $('.sidebar').toggleClass('active');
    }
});