import { menuArray } from "./data.js"

const menu = document.getElementById("menu");
let order = [];
let orderValue = 0;



function renderMenu(){
    menuArray.forEach(function(item){
        menu.innerHTML +=
        `<li class="menu-item" id="menu-item">
            <h2>${item.emoji}</h2>
            <div class="item">
                <h3 class="item-title" id ="item-title">${item.name}</h3>
                <p class="item-description" id="item-description">${item.ingredients}</p>
                <h3 class="item-price" id="item-price">$${item.price}</h3>
            </div>
            <button class="select-button" id="select-button">+</button>
        </li>`;
    })

}




renderMenu();
