// No cambies los nombres de las funciones.

// --- Temario ampliado: constantes ---
// ¿Qué string devuelve typeof en cada línea, en orden hipotético?
// Antes del `=` (pero después de hoist de `var`): console.log(typeof f);
// var f = function() { return 1; };
const resultadoTipoFuncionExpresadaVar = 'undefined';

// Reemplaza null por una función flecha asignada a identificador (sin palabra function):
// ejemplo de forma: identificador = (num) => num * ...
let duplicarConFlecha = (num) => num * 2;

function devolverPrimerElemento(array) {
  return array[0];
}

function devolverUltimoElemento(array) {

  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {

  return array.length;
}

function incrementarPorUno(array) {

    for (let i = 0; i < array.length; i++) {
      array[i] += 1;
    }
    return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
 
  return [...array, elemento];

}

function agregarItemAlComienzoDelArray(array, elemento) {
 
  return [elemento, ...array];
}

function dePalabrasAFrase(palabras) {

  return palabras.join(' ');
}

function arrayContiene(array, elemento) {

  return array.includes(elemento);
}

function agregarNumeros(numeros) {

  return numeros.reduce((acum, val) => acum + val, 0);
}

function promedioResultadosTest(resultadosTest) {

    let promedio = 0;
    for (let i = 0; i < resultadosTest.length; i++) {
      promedio += resultadosTest[i];
    }
    return promedio / resultadosTest.length;  
}

function numeroMasGrande(numeros) {

  return Math.max(...numeros);
}

function multiplicarArgumentos() {
  
  if (arguments.length === 0) return 0;
let producto = 1;
for (let i = 0; i < arguments.length; i++) {
  producto *= arguments[i];
}
return producto;
}

// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
 
  return {
    nombre,
    edad,
    meow() {
      return 'Meow!';
    }
  };
}

function agregarPropiedad(objeto, property) {

 objeto[property] = null;
return objeto;
}

function invocarMetodo(objeto, metodo) {
 
  return objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
 
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {

  delete objeto[propiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {

  return {
    nombre,
    email,
    password
  };
}

function tieneEmail(usuario) {

  return usuario.email !== undefined;
}

function tienePropiedad(objeto, propiedad) {

  return propiedad in objeto;
}

function verificarPassword(usuario, password) {

  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {

  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {

  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {

  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
 
  let suma = 0;
  for (let i = 0; i < usuario.posts.length; i++) {
    suma += usuario.posts[i].likes;
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto) {
 
  producto.calcularPrecioDescuento = function () {
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  };
  return producto; 
}

// Do not change any of the function names

function invocarCallback(cb) {

  cb();
}

function sumarArray(numeros, cb) {

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
cb(suma);
}

function forEach(array, cb) {
 
  array.forEach(cb);
}

function map(array, cb) {
 
  return array.map(cb);
}

function filter(array, cb) {
 
  return array.filter(cb);
}

// --- Temario ampliado: extremos pop/shift y APIs de búsqueda/unión/recorte ---

function sacarUltimoConPop(arreglo) {
 
  return arreglo.pop();
}

function sacarPrimeroConShift(arreglo) {
  
  return arreglo.shift();
}

function unirConSeparador(elementos, separador) {
 
  return elementos.join(separador);
}

function indicePrimero(arreglo, item) {
  
  return arreglo.indexOf(item);
}

function indiceUltimo(arreglo, item) {
  
  return arreglo.lastIndexOf(item);
}

function existeConIncludes(arreglo, item) {
 
  return arreglo.includes(item);
}

function subArregloCopia(origen, inicio, fin) {
  
  return origen.slice(inicio, fin);
}

function pegarDosArreglos(arregloA, arregloB) {

  return [...arregloA, ...arregloB];
}

function aplicarSpliceDesde(arreglo, desde, borrarCantidad, ...insertarItems) {
  
  arreglo.splice(desde, borrarCantidad, ...insertarItems);
  return arreglo;
}

// --- Reverse / Sort (mutaciones) ---
function invertirEnLugar(arreglo) {
  
  arreglo.reverse();
  return arreglo;
}

function ordenarNumerosAsc(arreglo) {
  
  arreglo.sort((a, b) => a - b);
return arreglo;
}

function sumatorioConReduce(numeros, inicial = 0) {
 
  return numeros.reduce((acum, val) => acum + val, inicial);
}

function agruparPorCampoReduce(listaObjetos, nombreCampo) {
  
  return listaObjetos.reduce((acum, val) => {
    acum[val[nombreCampo]] = [...(acum[val[nombreCampo]] || []), val];
    return acum;
  }, {});
}

function agruparPorCampoObjectGroupBy(listaObjetos, nombreCampo) {
  
return Object.groupBy(listaObjetos, (item) => item[nombreCampo]);
}

function encadenarOperacionesSinAnidar(valorInicial, funcionesTransform) {
  
    let resultado = valorInicial;
    for (let i = 0; i < funcionesTransform.length; i++) {
      resultado = funcionesTransform[i](resultado);
    }
    return resultado;
}

function objetoNombreMayuscConFlechaAnidada(nombre) {
  
  return {
  nombre,
  enMayuscMedianteFlecha() {
    const transformar = () => this.nombre.toUpperCase(); // Flecha anidada que hereda 'this'
    return transformar();
  }
};
}

function establecerValorMismaReferencia(objetoConstanteRef, propiedadString, nuevoValor) {
 
  objetoConstanteRef[propiedadString] = nuevoValor;
return objetoConstanteRef;

const sumarMedianteExpresionNombrada = function nombradoInternamente(a, b) {
  
  return a + b;
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  resultadoTipoFuncionExpresadaVar,
  duplicarConFlecha,
  sumarMedianteExpresionNombrada,
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
  invocarCallback,
  sumarArray,
  forEach,
  map,
  filter,
  sacarUltimoConPop,
  sacarPrimeroConShift,
  unirConSeparador,
  indicePrimero,
  indiceUltimo,
  existeConIncludes,
  subArregloCopia,
  
  pegarDosArreglos,
  aplicarSpliceDesde,
  invertirEnLugar,
  ordenarNumerosAsc,
  sumatorioConReduce,
  agruparPorCampoReduce,
  agruparPorCampoObjectGroupBy,
  encadenarOperacionesSinAnidar,
  objetoNombreMayuscConFlechaAnidada,
  establecerValorMismaReferencia,
};
