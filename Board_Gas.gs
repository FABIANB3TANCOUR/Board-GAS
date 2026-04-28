
function LISTAR_TIPOS(rangoTipos) {
  let tipos = rangoTipos.flat().filter(t => t !== "");
  let unicos = [...new Set(tipos)];
  return unicos;
}


function TOTAL_POR_TIPO(rangoTipos, rangoPrecios, tipoObjetivo) {
  let total = 0;
  for (let i = 0; i < rangoTipos.length; i++) {
    if (rangoTipos[i][0] === tipoObjetivo) {
      total += parseFloat(rangoPrecios[i][0]) || 0;
    }
  }
  return total;
}

function CONTAR_GENERO(rangoNombres, rangoTipos, tipoObjetivo, generoDeseado) {
  const mujeres = ['Barbara', 'Monica', 'Pauline', 'Penny', 'Priscilla', 'Janice', 'Megan', 'Cynthia', 'Roberta', 'Lorraine', 'Gretchen', 'Elsie', 'Rhonda', 'Danielle', 'Kate'];
  let cuenta = 0;

  for (let i = 0; i < rangoTipos.length; i++) {
    if (rangoTipos[i][0] === tipoObjetivo) {
      let nombre = rangoNombres[i][0];
      let esMujer = mujeres.includes(nombre);
      
      if (generoDeseado === "Mujer" && esMujer) cuenta++;
      if (generoDeseado === "Hombre" && !esMujer && nombre !== "") cuenta++;
    }
  }
  return cuenta;
}

function PAGO_TOTAL_NOMBRE(rangoNombres, rangoPrecios, nombreBuscar) {
  let total = 0;
  let nombreMin = nombreBuscar.toLowerCase();
  for (let i = 0; i < rangoNombres.length; i++) {
    if (rangoNombres[i][0].toString().toLowerCase() === nombreMin) {
      total += parseFloat(rangoPrecios[i][0]) || 0;
    }
  }
  return total;
}

function VENTA_FECHA_EXTREMA(rangoFechas, rangoPrecios, queBuscas) {
  let ventas = {};
  for (let i = 0; i < rangoFechas.length; i++) {
    let fecha = rangoFechas[i][0];
    if (fecha === "") continue;
    let precio = parseFloat(rangoPrecios[i][0]) || 0;
    ventas[fecha] = (ventas[fecha] || 0) + precio;
  }
  
  let keys = Object.keys(ventas);
  if (queBuscas === "max") {
    let maxFecha = keys.reduce((a, b) => ventas[a] > ventas[b] ? a : b);
    return maxFecha + " ($" + ventas[maxFecha].toFixed(2) + ")";
  } else {
    let minFecha = keys.reduce((a, b) => ventas[a] < ventas[b] ? a : b);
    return minFecha + " ($" + ventas[minFecha].toFixed(2) + ")";
  }
}
