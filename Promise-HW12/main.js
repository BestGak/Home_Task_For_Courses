function getRandomChinese(length) {
  return new Promise((resolve) => {
    let word = '';

    for (let i = 1; i <= length; i++) {
      setTimeout(function timer() {
        word += String.fromCharCode(Date.now());
        if(word.length === length) {
          resolve(word)
        }
      }, i * 500);
    }

  })
}

getRandomChinese(4).then(word => console.log(word));


