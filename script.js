import { menuArray } from "./data.js"

const menu = document.getElementById("menu");
const paymentModal = document.getElementById("card-details-modal");
const thankYouScreen = document.getElementById("thank-you");
let orderDetails = document.getElementById("order-details");

let order = [];


document.addEventListener('click', function(e){

    if(e.target.dataset.id === "0" || e.target.dataset.id === "1" || e.target.dataset.id === "2"){
        addItem(e.target.dataset.id);
        renderOrder();
    }else if(e.target.id === "complete-order-btn"){
        paymentModal.style.display = "block"
        console.log("Trying to display modal!")
    }else if(e.target.id === "remove-btn"){
        //removeItem(itemId);
        console.log("trying to remove!",e.target.dataset.orderedid);
        removeItem(e.target.dataset.orderedid);
    }else if(e.target.id=== "complete-payment-btn"){
        e.preventDefault();
        console.log("Closing");
        orderDetails.innerHTML="";
        paymentModal.style.display = "none";
        thankYouScreen.style.display = "block";
        //thankYou();
    }
})


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
            <button class="select-button" id="select-button" data-id="${item.id}">+</button>
        </li>`;
    })
}

function renderOrder(){
    orderDetails.innerHTML = `<h3>Your Order:</h3>`;
    let orderValue = 0;
    order.forEach(function(orderedItem){
        orderDetails.innerHTML+= 
        `<li class="ordered-item">
            <p class="">${orderedItem.name}</p>
            <button class="remove-btn" id="remove-btn" data-orderedId=${orderedItem.id}>remove</button>
            <p class="ordered-price">$${orderedItem.price}</p>
        </li>`
        orderValue+= orderedItem.price;
    })

    orderDetails.innerHTML+= 
    `<div class="final-price">
        <h3 class="item-price">Total Price:</h3>
        <h3 id="total-price">$${orderValue}</h3>
    </div>
    <button class="complete-order-btn" id="complete-order-btn">Complete order</button>`;
}

function addItem(itemId){
    const item = menuArray.filter(function(items){
        return items.id === +itemId;
    })[0];
    order.push(item);
}

function removeItem(itemId){
    const index = order.findIndex(function(item){
        return item.id == itemId;
    });
    order.splice(index,1);
    renderOrder();
}

// function thankYou(){
//     document.getElementById("thank-you").style.display = "block";
    
// }

renderMenu();
