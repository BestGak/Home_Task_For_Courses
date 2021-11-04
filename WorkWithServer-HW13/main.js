// const btnLoad = document.getElementById(btnLoad);
// const list = document.getElementById(list)
const baseUrl = 'https://swapi.dev/api/';

  axios
   .get(`${baseUrl}films/2/`)
   .then((response) => {
     const man = response.data.characters[0];
     return man
    //  for(let i = 0; i < response.data.results.length; i++) {
    //   console.log(response.data.results[i].name +' '+ response.data.results[i].gender +' '+ response.data.results[i].birth_year);
    //  }
   })
   .then((response) => { 
      console.log(response);
   })
   .catch((err) => {
     console.log('Erorr' , err.message);
   })