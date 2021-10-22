const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

// imprime Marte depois de 4 segundos
setTimeout(getPlanet,4000); 
// Uso do setTimeOut para ter um tempo de espera invocando como callback a função getPlanet