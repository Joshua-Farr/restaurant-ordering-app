import { menuArray } from "./data.js"

const menu = document.getElementById("menu");



function renderMenu(){
    menuArray.forEach(function(item){
        console.log(item);
    })

}

renderMenu();