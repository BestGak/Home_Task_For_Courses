const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (student) => {
    const subjectArr = [];

    for (const subject in student.subjects) {
        const newSubject = subject.replace('_', ' ');
        subjectArr.push(newSubject[0].toUpperCase() + newSubject.slice(1));
    }

    return subjectArr
}

const getAverageMark = (students) => {
    const marks = Object.values(students.subjects);
    const allMarks = marks.reduce((acc, item) => acc.concat(item));
    const averageMark = allMarks.reduce((acc, item) => (acc + item)) / allMarks.length;
    return +averageMark.toFixed(2);
}

const getStudentInfo = (students) => {
    return {
        course: students.course,
        name: students.name,
        averageMark: getAverageMark(students)
    }
}

const getStudentsNames = (students) => {
    const arrStudents = students.map((name) => name.name);
    return arrStudents.sort()
}

const getBestStudent = (students) => students.reduce((a, b) => getAverageMark(a) > getAverageMark(b) ? a : b).name
// const getBestStudent = (students) => {
//     const arrAverageMarks = [];
//     for(let i = 0; i<students.length; i++) {
//         arrAverageMarks.push(getAverageMark(students[i]))     
//     }
//     const indexMaxAvr = arrAverageMarks.indexOf(Math.max(...arrAverageMarks));
//     return students[indexMaxAvr].name
// }


const calculateWordLetters = (word) => {
    return word.split('').reduce((prev, current) => {
        if (prev[current]) {
            prev[current]++;
        } else {
            prev[current] = 1;
        }
        return prev;
    }, {});
}



console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('тест'));
