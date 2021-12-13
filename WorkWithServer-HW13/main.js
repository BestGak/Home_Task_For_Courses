const showPeople = document.getElementById('show_details');
const prevPlanet = document.getElementById('prev__planet')
const nextPlanet = document.getElementById('next__planet')
let loading = document.querySelector('.quotes');
let planets = document.querySelector('.planets');
let pagePlanets = 1;

showPeople.addEventListener('click', async () => {
  loading.innerHTML = "loading...";
  await getPeople();
})

async function getInfo(query) {
  try {
    const data = await fetch(query);
    return data.json();
  } catch (error) {
    console.error(error.message);
  }
}

async function getPeople() {
  const baseUrl = 'https://swapi.dev/api/'
  try {
    const film = await getInfo(`${baseUrl}films/2`);
    let list = "";
    if (film?.characters?.length > 0) {
      for (let query of film.characters) {
        const person = await getInfo(query);
        list += `
        <div class="persons">  
            <h3>Full name: ${person.name}</h3>
            <p>Date of birth: ${person.birth_year}</p>
            <p>Gender: ${person.gender}</p>
        </div>
        `
      }
      loading.innerHTML = list;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPlanets() {
  const baseUrl = 'https://swapi.dev/api/'
  let list = '';

  try {
    const multiPlanets = await getInfo(`${baseUrl}planets/?page=${pagePlanets}`)
    let list = ''
    for (let planet of multiPlanets.results) {
      list += `
      <div class="planets__block">
        <h3 class="planets__name">Name: ${planet.name}</h3>
        <p class="planets__name">Terrain: ${planet.terrain}</p>
        <p class="planets__name">Orbital period: ${planet.orbital_period}</p>
      </div>
      `
    }
    planets.innerHTML = list;


  } catch (error) {
    console.log(error);
  }
}

nextPlanet.addEventListener("click", (e) => {
  if(pagePlanets === 6) return;
  pagePlanets += 1;
  getPlanets();
});
prevPlanet.addEventListener("click", (e) => {
  if(pagePlanets === 1) return;
  pagePlanets -= 1;
  getPlanets();
});


getPlanets();


// Variant 2 Fetch

// showDetails.addEventListener('click', async () => {
//     loading.innerHTML = "loading...";
//     await getPostsRequest();
// })

// function getPostsRequest() {
//     const baseUrl = "https://swapi.dev/api/";
//     fetch(`${baseUrl}films/2`)
//         .then(response => response.json())
//         .then(data => data.characters)
//         .then(response => {
//             for (let word of response) {
//                 console.log(word);
//                 fetch(word)
//                     .then(response => response.json())
//                     .then(response => {
//                         document.write(`
//                     <p style="color: red; font-family: Cambria, serif">
//                     ${response.name} , ${response.birth_year} , ${response.gender}</p>`

//                     );
//                         // loading.innerHTML = `${response.name} , ${response.birth_year} , ${response.gender}`
//                     })
//             }


//         })
//         .catch(error => {
//             console.log('Ошибка', error)
//         })
// }


// function getPeople() {
//     const baseUrl = "https://swapi.dev/api/people";
//     fetch(`${baseUrl}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => {
//             console.log('Ошибка', error)
//         })
// }
