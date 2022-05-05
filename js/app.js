//Variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector("#year")
const marca = document.querySelector('#marca')
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")

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
    minimo: 0,
    maximo: 0,
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    if (resultado.length) {
        console.log(resultado);
        mostrarAutos(resultado)
    } else {
        limpiarHTML()
        noTieneAuto()
    }
}

function noTieneAuto() {
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No Existen autos disponibles'
    resultado.appendChild(noResultado)

}
/*     if (resultado === []) {
        resultado.textContent("No se ha encontrado vehiculos con la información requerida");
    } */

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

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda
    if (minimo) {
        return auto.precio >= minimo
    }
    return auto
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda

    if (maximo) {
        return auto.precio <= maximo
    }
    return auto
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === +datosBusqueda.puertas
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
minimo.addEventListener('change', (e) => {
    /* console.log(e.target.value); */
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
})

maximo.addEventListener('change', (e) => {
    /* console.log(e.target.value); */
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
})

puertas.addEventListener('change', (e) => {
    /* console.log(e.target.value); */
    datosBusqueda.puertas = e.target.value
    filtrarAuto()
})