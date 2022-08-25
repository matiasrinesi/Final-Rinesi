const tablaProductos = document.getElementById("tablaProductos")
const boton1 = document.getElementById("boton1")

async function mostrarProductos() { // le pongo async para aclarar que va a haber elementos asincronos en la funcion
    const productos = await fetch('./json/productos.json') // defino que algo es asincrono con await
    const productosParseados = await productos.json()
    tablaProductos.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Equipo</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col"></th>
                <th scope="col"></th>
               
            </tr>
        </thead>
            <tbody id="tBody">
            </tbody>
            <tr> 
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"><button class="btn btn-dark"> Pedir </button></th> 
            </tr>
        </table>
    
    `
    productosParseados.forEach((producto, indice) => {
        tBody.innerHTML += `

                <tr class="table-light" id="producto${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${producto.equipo}</td>
                <td>${producto.modelo}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
                <td><img src="./images/${producto.img}"></td>
                <td><button class="btn btn-dark"> Comprar </button>
                
                </tr>
        `
})}








boton1.addEventListener('click', mostrarProductos)

boton1.addEventListener('click', () => {
    mostrarProductos()
})

/*async function mostrarProductos() { // le pongo async para aclarar que va a haber elementos asincronos en la funcion
    const productos = await fetch('./json/productos.json') // defino que algo es asincrono con await
    const productosParseados = await productos.json()
    tablaProductos.innerHTML += `

    <div class="card border-warning mb-3" id="camiseta${indice} style="max-width: 20rem; margin:5px;">
  <div class="card-header"><h2>${producto.img}</h2></div>
  <div class="card-body">
    <h3 class="card-title">${producto.equipo}</h3>
    <p class="card-text">${producto.modelo}</p>
    <p class="card-text">$${producto.precio}</p>
    <p class="card-text">$${producto.stock}</p>
  </div>
</div>
    `
    <div class="card border-dark mb-3" id="camiseta${indice}" style="max-width: 20rem; margin:4px;">
    <div class="card-header"><h2>${camiseta.equipo}</h2></div>
    <div class="card-body">
        <p class="card-title">Talle: ${camiseta.talle}</p>
        <p class="card-title">Dorsal: ${camiseta.dorsal}</p>
        <p class="card-title">Nombre: ${camiseta.nombre}</p>
        
        <button class="btn btn-danger">Eliminar Camiseta</button>
    </div>
</div>
}








boton1.addEventListener('click', mostrarProductos)

boton1.addEventListener('click', () => {
    mostrarProductos()
})*/

const botonAgg = document.getElementById("botonAgg")