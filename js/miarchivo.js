class Camiseta {
    constructor(equipo, talle, dorsal, nombre) {
        this.equipo = equipo
        this.talle = talle
        this.dorsal = dorsal
        this.nombre = nombre
    }
}

const camisetas = []



const formCamisetas = document.getElementById("formCamisetas")


formCamisetas.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    /*let equipo = document.getElementById(`equipoCamiseta`).value
    let talle = document.getElementById(`talleCamiseta`).value
    let dorsal = document.getElementById(`dorsalCamiseta`).value*/

    let camiseta = new Camiseta (datForm.get(`equipo`), datForm.get(`talle`), datForm.get(`dorsal`), datForm.get(`nombre`) )
    camisetas.push(camiseta)
   
    localStorage.setItem(`camisetas`, JSON.stringify(camisetas))

    formCamisetas.reset()
})






const botonFinalizar = document.getElementById(`botonFinalizar`)



botonFinalizar.addEventListener(`click`, () => {
    Swal.fire({
        icon: 'success',
        title: 'Pedido recibido',
        text: 'Su pedido personalizado ya fue recibido y le enviaremos un presupuesto dentro de los próximos 7 días hábiles',
        footer: '<p> ¡Muchas gracias por confiar en Shirt Museum!</p>'
      })

})