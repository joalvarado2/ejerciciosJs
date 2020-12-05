// encontrar una letra o vocal en una frase
/* var cadena = prompt("escribe una frase") 
var indices = [];
for(var i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "o") {
        indices.push(i);
          }
}
document.write(`la frase contiene ${indices.length} letras O
`) */

// ##########################################################################################
// ejercicio paises con CALLBACKS

/* const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`agregando ${pais}`)
    callback();
}

function mostrarPaises() {
  console.log(paises);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("alemania", mostrarPaises)
    setTimeout(() => {
      nuevoPais("Francia", mostrarPaises)
      setTimeout(() => {
        nuevoPais("Holanda", mostrarPaises)
        setTimeout(() => {
          nuevoPais("Croacia", mostrarPaises)
          setTimeout(() => {
            nuevoPais("Nueva Zelanda", mostrarPaises)
          },2000)
        },2000)
      },2000)
    },2000)
  },2000)
}
iniciarCallbackHell(); */

// ###############################################################################################
// ejercicio paises con PROMISES

/* const paises = [];

const nuevoPais = (pais) => new Promise ((resolve) => {
  setTimeout (() => {
    paises.push(pais);
    resolve(`agregando ${pais}`)
  }, 3000);
})

nuevoPais("Alemania")
  .then( resultado => {
    console.log(resultado)
    console.log(paises)
    return nuevoPais("Holanda")
  })
  .then( resultado => {
    console.log(resultado)
    console.log(paises)
    return nuevoPais("Nueva Zelanda")
  })
  .then( resultado => {
    console.log(resultado)
    console.log(paises)
  })
 */