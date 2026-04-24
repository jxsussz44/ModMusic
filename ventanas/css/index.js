/* LOGIN */
function openLogin(){
document.getElementById("loginModal").style.display="flex";
}

function login(){
alert("Bienvenido a MOD MUSIC 🔥");
document.getElementById("loginModal").style.display="none";
}

/* CHECKOUT */
function openCheckout(){
const box=document.getElementById("checkout");
const items=document.getElementById("checkoutItems");

items.innerHTML="";
let total=0;

cart.forEach(p=>{
items.innerHTML+=`<p>${p.name} x ${p.qty}</p>`;
total+=p.price*p.qty;
});

document.getElementById("checkoutTotal").innerText="Total: $"+total;

box.classList.add("active");
}

/* PAGAR */
function pay(){
alert("Pago exitoso (simulado) 💳");
cart=[];
save();
updateCart();
document.getElementById("checkout").classList.remove("active");
}

/* BOTON EN CARRITO */
const btn=document.createElement("button");
btn.innerText="Finalizar compra";
btn.onclick=openCheckout;

document.getElementById("cart").appendChild(btn);