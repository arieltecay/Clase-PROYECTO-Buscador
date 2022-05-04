//Variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector("#year")
const marca = document.querySelector('#marca')

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)
    llenarSelect()
})

//Objeto de Busqueda
const datosBusqueda =
{
    marca: '',
    modelo: '',
    year: '',
    precio: '',
    puertas: '',
    color: '',
    transmision: ''
}


//Funciones
function mostrarAutos(autos) {
    limpiarHTML()
    autos.forEach(auto => {
        const { marca, modelo, puertas, year, precio, color, transmision } = auto

        const autoHTML = document.createElement('p')
        autoHTML.textContent = `Auto: ${marca} - Modelo: ${modelo} - Puertas: ${puertas} - Año: ${year} - Precio: ${precio} - Color: ${color} - Transmision: ${transmision}`

        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect() {
    for (let i = maxYear; i > minYear; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    console.log(resultado);
    mostrarAutos(resultado)
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    }
    return auto
}
function filtrarYear(auto) {

    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year)
    }
    return auto
}

//Listener

marca.addEventListener('change', (e) => {
    /* console.log(e.target.value); */
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('change', (e) => {
    /* console.log(e.target.value); */
    datosBusqueda.year = e.target.value
    filtrarAuto()
})

