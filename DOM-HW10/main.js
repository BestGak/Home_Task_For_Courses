// const generateBlocks = () =>  {
//   let myDiv = document.getElementById("org_div1");
//   for(let i = 0; i <= 24; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.className = 'randomColor'
//     myDiv.append(newDiv);
//   }
// }

// generateBlocks()


// const generateBlocksInterval = () => {
//  setInterval(() => {
//  let allDivs = document.querySelectorAll('.randomColor')
//  let letters =  '0123456789ABCDEF';
//   allDivs.forEach(div => {
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     div.style.background = color
//     });
//  }, 1000);
// }

// generateBlocksInterval()

const getRandomInt = () => Math.floor(Math.random() * 256);
const generateBlocks = () =>  {
  const myDiv = document.getElementById("org_div1");
  myDiv.innerHTML = ''
  for(let i = 0; i <= 24; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = 'randomColor'     
    newDiv.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    myDiv.append(newDiv);   
  }

}

(() =>setInterval(generateBlocks, 1000))();
