
//Capturar id
const shopContent = document.getElementById("shopContent");
const Carrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const vaciarCarrito = document.getElementById("vaciar-carrito");
//Array de objetos
const productos = [
    {
        id: 1,
        img:"assets/images/silla1.jpg",
        nombre: "Closer",
        precio: 2000,
        cantidad: 1,
    },
    
    {
        id: 2,
        img:"assets/images/silla2.jpg",
        nombre: "Angel",
        precio: 1500,
        cantidad: 1,
    },
    
    {
        id: 3,
        img:"assets/images/silla3.jpg",
        nombre: "Lookhere",
        precio: 2000,
        cantidad: 1,
    },
    {
        id: 4,
        img:"assets/images/silla4.jpg",
        nombre: "So far away",
        precio: 1800,
        cantidad: 1,
    },
    
    {
        id: 5,
        img:"assets/images/silla5.jpg",
        nombre: "Singularity",
        precio: 3000,
        cantidad: 1,
    },
    {
        id: 6,
        img:"assets/images/silla6.jpg",
        nombre: "EveryThingoes",
        precio: 2800,
        cantidad: 1,
    },
    
    {
        id: 7,
        img:"assets/images/silla7.jpg",
        nombre: "Film out",
        precio: 2500,
        cantidad: 1,
    },
    
    
    {
        id: 8,
        img:"assets/images/silla8.jpg",
        nombre: "Little tulip",
        precio: 3500,
        cantidad: 1,
    },
    {
        id: 9,
        img:"assets/images/silla9.jpg",
        nombre: "Artek",
        precio: 3000,
        cantidad: 1,
    },
    
    {
        id: 10,
        img:"assets/images/silla10.jpg",
        nombre: "Butterfly",
        precio: 3200,
        cantidad: 1,
    },
    {
        id: 11,
        img:"assets/images/silla11.jpg",
        nombre: "Jacobsen",
        precio: 3000,
        cantidad: 1,
    },
    {
        id: 12,
        img:"assets/images/silla12.jpg",
        nombre: "Blue side",
        precio: 2800,
        cantidad: 1,
    },
    
    {
        id: 13,
        img:"assets/images/silla13.jpg",
        nombre: "Lie",
        precio: 2500,
        cantidad: 1,
    },
    {
        id: 14,
        img:"assets/images/silla14.jpg",
        nombre: "Jamais Vu",
        precio: 3000,
        cantidad: 1,
    },
    
    {
        id: 15,
        img:"assets/images/silla15.jpg",
        nombre: "Eames",
        precio: 3800,
        cantidad: 1,
    },
    {
        id: 16,
        img:"assets/images/silla16.jpg",
        nombre: "Índigo",
        precio: 2800,
        cantidad: 1,
    },
    {
        id: 17,
        img:"assets/images/silla17.jpg",
        nombre: "Cook Loom",
        precio: 2500,
        cantidad: 1,
    },
    {
        id: 18,
        img:"assets/images/silla18.jpg",
        nombre: "Elephant",
        precio: 2700,
        cantidad: 1,
    },
    {
        id: 19,
        img:"assets/images/silla19.jpg",
        nombre: "Home",
        precio: 3000,
        cantidad: 1,
    },
    {
        id: 20,
        img:"assets/images/silla20.jpg",
        nombre: "So far away",
        precio: 2800,
        cantidad: 1,
    },
    {
        id: 21,
        img:"assets/images/silla21.jpg",
        nombre: "Snooze",
        precio: 2500,
        cantidad: 1,
    },
    {
        id: 22,
        img:"assets/images/silla22.jpg",
        nombre: "Bo Concept",
        precio: 3000,
        cantidad: 1,
    },
    
    {
        id: 23,
        img:"assets/images/silla23.jpg",
        nombre: "Epiphany",
        precio: 3500,
        cantidad: 1,
    },
    {
        id: 24,
        img:"assets/images/silla24.jpg",
        nombre: "My Time",
        precio: 3000,
        cantidad: 1,
    },
    ]

    let carrito = [];
   
    let carritoLS = localStorage.getItem("carrito")
if(carritoLS){
    carrito = JSON.parse(carritoLS)
} else {
    carrito = []
}



    productos.forEach((product)=>{
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p>cantidad: ${product.cantidad}</p>
        `
        
            
            shopContent.append(content);
            let comprar = document.createElement("button");
            comprar.innerText = "comprar";
            comprar.className = "comprar";
            content.append(comprar);

            comprar.addEventListener("click", ()=>{
                const repeat = carrito.some((repeatProduct) => repeatProduct.id===product.id);
                if (repeat) {
                    carrito.map((prod) => {
                        if (prod.id === product.id) {
                            prod.cantidad++;
                        }
                    })
                } else {

             carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,

                });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Producto añadido",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
          carritoCounter();      
    });
});
const getProducts = async () => {

    const response = await fetch ("./db/data.json");
    const data = await response.json();

 data.forEach(product =>{
        const productos = document.createElement("div")
        card.innerHTML = `Img src = ${product.img}>
                          <h3>Nombre: ${product.nombre}</h3>
                          <p>Precio: $${product.precio}</p>
                          <p>Cantidad: ${product.cantidad}</p>
                          <button>Comprar</button>`
                          
        container.appenChild(productos)

    });
};


    
 

    
   
    
    
    






   
