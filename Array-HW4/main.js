const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
const getRandomInt = (max) => Math.floor(Math.random() * max);

const studentsArr = (arrWithStudents) => {
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

const arrPares = studentsArr(students);

const paresTheme = (pares, theme) => {
  let paresWithTheme = [];
  for (let i = 0; i < theme.length; i++) {
    paresWithTheme.push([pares[i].join(" i "), theme[i]]);
  }
  return paresWithTheme;
};

const arrParesWithTheme = paresTheme(arrPares, themes);

const marksStudents = (arrStudents, arrMarks) => {
  const arrWithMarks = [];
  for (let i = 0; i < marks.length; i++) {
    arrWithMarks.push([arrStudents[i], arrMarks[i]]);
  }
  return arrWithMarks;
};

const randomMarks = (arrWithStudentsAndTheme) => {
  let arrWithAllInforamtion = [];
  for (let i = 0; i < arrWithStudentsAndTheme.length; i++) {
    arrWithAllInforamtion.push(arrWithStudentsAndTheme[i].concat(getRandomInt(5)));
    // debugger
  }
  return arrWithAllInforamtion;
};

console.log(studentsArr(students));
console.log(paresTheme(arrPares, themes));
console.log(marksStudents(students, marks));
console.log(randomMarks(arrParesWithTheme));
