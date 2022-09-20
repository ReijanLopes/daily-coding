// Navigator
// achei interessante, testando resposta e funções
const root = document.querySelector(".root");
console.log(navigator.cookieEnabled)//avaliado inutilizável

//console.log(navigator.canShare("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare"))
//canShare foi decrepitado
console.log("geolocation",navigator.geolocation)

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Posição atual:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Margem de erro: ${crd.accuracy}m`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  //Ativado quando a posição atual muda
  navigator.geolocation.watchPosition(success)


