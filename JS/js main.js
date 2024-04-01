
//Capturar id
const shopContent = document.getElementById("shopContent");
const Carrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");

//Array de objetos
const productos = [
    {
        id: 1,
        img:"images/silla1.jpg",
        nombre: "Closer",
        precio: 2000,
        
    },
    
    {
        id: 2,
        img:"images/silla2.jpg",
        nombre: "Angel",
        precio: 1500,
    },
    
    {
        id: 3,
        img:"images/silla3.jpg",
        nombre: "Lookhere",
        precio: 2000,
    },
    {
        id: 4,
        img:"images/silla4.jpg",
        nombre: "So far away",
        precio: 1800,
    },
    
    {
        id: 5,
        img:"images/silla5.jpg",
        nombre: "Singularity",
        precio: 3000,
    },
    {
        id: 6,
        img:"images/silla6.jpg",
        nombre: "EveryThingoes",
        precio: 2800,
    },
    
    {
        id: 7,
        img:"images/silla7.jpg",
        nombre: "Film out",
        precio: 2500,
    },
    
    
    {
        id: 8,
        img:"images/silla8.jpg",
        nombre: "Little tulip",
        precio: 3500,
    },
    {
        id: 9,
        img:"images/silla9.jpg",
        nombre: "Artek",
        precio: 3000,
    },
    
    {
        id: 10,
        img:"images/silla10.jpg",
        nombre: "Butterfly",
        precio: 3200,
    },
    {
        id: 11,
        img:"images/silla11.jpg",
        nombre: "Jacobsen",
        precio: 3000,
    },
    {
        id: 12,
        img:"images/silla12.jpg",
        nombre: "Blue side",
        precio: 2800,
    },
    
    {
        id: 13,
        img:"images/silla13.jpg",
        nombre: "Lie",
        precio: 2500,
    },
    {
        id: 14,
        img:"images/silla14.jpg",
        nombre: "Jamais Vu",
        precio: 3000,
    },
    
    {
        id: 15,
        img:"images/silla15.jpg",
        nombre: "Eames",
        precio: 3800,
    },
    {
        id: 16,
        img:"images/silla16.jpg",
        nombre: "Índigo",
        precio: 2800,
    },
    {
        id: 17,
        img:"images/silla17.jpg",
        nombre: "Cook Loom",
        precio: 2500,
    },
    {
        id: 18,
        img:"images/silla18.jpg",
        nombre: "Elephant",
        precio: 2700,
    },
    {
        id: 19,
        img:"images/silla19.jpg",
        nombre: "Home",
        precio: 3000,
    },
    {
        id: 20,
        img:"images/silla20.jpg",
        nombre: "So far away",
        precio: 2800,
    },
    {
        id: 21,
        img:"images/silla21.jpg",
        nombre: "Snooze",
        precio: 2500,
    },
    {
        id: 22,
        img:"images/silla22.jpg",
        nombre: "Bo Concept",
        precio: 3000,
    },
    
    {
        id: 23,
        img:"images/silla23.jpg",
        nombre: "Epiphany",
        precio: 3500,
    },
    {
        id: 24,
        img:"images/silla24.jpg",
        nombre: "My Time",
        precio: 3000,
    },
    ]
    let carrito = [];
   
    let cartProductsLS = localStorage.getItem("cartProducts")
if(cartProductsLS){
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}

    productos.forEach((product)=>{
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `
        
            
            shopContent.append(content);
            let comprar = document.createElement("button");
            comprar.innerText = "comprar";
            comprar.className = "comprar";
            content.append(comprar);

            comprar.addEventListener("click", ()=>{
             carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,

            });
        
    });
});
    Carrito.addEventListener("click",()=> {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class= "modal-header-title">Carrito.</h1>`
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    
    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none";

    });
   
    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;
        modalContainer.append(carritoContent);
   });
   const total = carrito.reduce((acc, el) => acc + el.precio,0);
    
 
   const totalBuying = document.createElement("div");
   totalBuying.className = "total-content";
   totalBuying.innerHTML = `total a pagar: ${total}$`;
   modalContainer.append(totalBuying);

   localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
});
