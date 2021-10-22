const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (onSuccess) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => onSuccess(currentTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);



// definição da função sendMarsTemperature...
// const sendMarsTemperature = (tempCallBack, greetCall) => {
//   tempCallBack(); // imprime "It is currently 47ºF at Mars", por exemplo
//   greetCall(); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
// }

// sendMarsTemperature(temperatureInFahrenheit,greet); // Chamada das funções callbacks para uma função principal

// // Uma prática que permite a diminuição de complexidade de uma função por exemplo
