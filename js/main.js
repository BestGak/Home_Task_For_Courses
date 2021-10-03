const studentsGirl = ["Олена","Іра", "Світлана"]
const studetsMan = ["Олександр", "Ігор", "Олексій"]
// const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pares = () => {
let students = [];
for(i = 0; i < studentsGirl.length; i++) {
  students.push(studentsGirl[i].concat(studetsMan[i]).split(' ')) ;
}
students.join('')
return console.log(students);
}

pares();