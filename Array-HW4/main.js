const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const getRandomInt = (max) => Math.floor(Math.random() * max + 1);

const createStudentsArr = (arrWithStudents) => {
  const girls = [];
  const men = [];
  const pares = [];

  for (const student of arrWithStudents) {
    if (student[student.length - 1] !== "а") {
      men.push(student);
    } else {
      girls.push(student);
    }
  }

  for (let i = 0; i < girls.length; i++) {
    pares.push([girls[i], men[i]]);
  }

  return pares;
};

const arrPares = createStudentsArr(students);

const createParesWithTheme = (pares, theme) => {
  let paresWithTheme = [];
  for (let i = 0; i < theme.length; i++) {
    paresWithTheme.push([pares[i].join(" i "), theme[i]]);
  }
  return paresWithTheme;
};

const arrParesWithTheme = createParesWithTheme(arrPares, themes);

const getMarksStudents = (arrStudents, arrMarks) => {
  const arrWithMarks = [];
  for (let i = 0; i < marks.length; i++) {
    arrWithMarks.push([arrStudents[i], arrMarks[i]]);
  }
  return arrWithMarks;
};

const getRandomMark = (arrWithStudentsAndTheme) => {
  let arrWithAllInforamtion = [];
  for (let i = 0; i < arrWithStudentsAndTheme.length; i++) {
    arrWithAllInforamtion.push(arrWithStudentsAndTheme[i].concat(getRandomInt(5)));
    // debugger
  }
  return arrWithAllInforamtion;
};

console.log(createStudentsArr(students));
console.log(createParesWithTheme(arrPares, themes));
console.log(getMarksStudents(students, marks));
console.log(getRandomMark(arrParesWithTheme));
