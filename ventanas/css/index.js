Controller.filter = function(type){
if(type==="all") return View.renderProducts(Model.products);

const map={
cuerda:["Guitarra","Bajo","Violín"],
viento:["Saxofón"]
};

View.renderProducts(
Model.products.filter(p=>map[type]?.includes(p.name))
);
}
document.getElementById("notif").style.display="block";
setTimeout(()=>document.getElementById("notif").style.display="none",1500);
