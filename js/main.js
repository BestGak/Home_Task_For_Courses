const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

const studentsArr = (arrWithStudents) => {
  const pares = [];
  const girls = arrWithStudents.filter((student) => student[student.length - 1] == "а");
  const mans = arrWithStudents.filter((student) => student[student.length - 1] !== "а");
  for (let i = 0; i < girls.length; i++) {
    pares.push([girls[i], mans[i], themes[i]]);
  }
  return pares;
};

const marksStudents = (arrStudents, arrMarks) => {
  const arrWithMarks = [];
  for (let i = 0; i < marks.length; i++) {
    arrWithMarks.push([arrMarks[i], arrStudents[i]]);
  }
  return arrWithMarks;
};
const getRandomInt = (max) => Math.floor(Math.random() * max);

const randomMarks = (studentsArr, arrThemes) => {
  const arrWithAllInforamtion = [];
  const girls = studentsArr.filter((student) => student[student.length - 1] == "а");
  const mans = studentsArr.filter((student) => student[student.length - 1] !== "а");
  for (let i = 0; i < girls.length; i++) {
    arrWithAllInforamtion.push([
      mans[i] + " i " + girls[i],
      arrThemes[i],
      getRandomInt(5),
    ]);
  }
  return arrWithAllInforamtion;
};

console.log(studentsArr(students));
console.log(marksStudents(students, marks));
console.log(randomMarks(students, themes));
