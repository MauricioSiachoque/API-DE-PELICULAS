import { buscarPeliculas } from "./controllers/controles.js"


let posters = document.getElementById("posters");

let boton = document.getElementById("boton");                //para el boton //           
boton.addEventListener("click", clickbuscar);               //para busqueda //             
function clickbuscar(){                                             
    posters.innerHTML = ""                             //para borrar busquedas //                                         
    let nombre = document.getElementById("nombre").value;                                       
    buscarPeliculas(nombre).then(function(objresultado){
        let arreglo_peliculas = objresultado.Search
        let html = ""
            arreglo_peliculas.forEach((elemento) => { 
                html += ` 
                    <div class="contenedor">
                         <div class="year">${elemento.Title}<br><br>${elemento.Year}</div>
                         <img src="${elemento.Poster}">
                    </div>
                `

            console.log(elemento.Poster)
    });
    posters.innerHTML += html

})
.catch((error) =>{
    alert("No hay resultados")             // para mostar errores de busqueda //
})

}
