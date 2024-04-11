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
        <p>cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        `;
        modalContainer.append(carritoContent);
   });
   const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0);
    
 
   const totalBuying = document.createElement("div");
   totalBuying.className = "total-content";
   totalBuying.innerHTML = `total a pagar: ${total}$`;
   modalContainer.append(totalBuying);

   localStorage.setItem("carrito", JSON.stringify(carrito))
});