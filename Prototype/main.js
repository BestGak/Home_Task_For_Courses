// let student = {
//     course: 'Студент 1го курсу',
//     university: 'Вищої Школи Психотерапії м.Одеса',
//     fullname: 'Остап Родоманський Бендер',
//     marks: [5, 4, 4, 5],
//     get getInfo() {
//         return `${this.course} ${this.university} ${this.fullname}`;
//     },
//     get getMarks() {
//         return `${this.marks}`.split(',');
//     },
//     set addMark(mark) {
//          return this.marks.push(mark)
//     },
//     get getAverageMark() {
//        return this.marks.map(i=>x+=i, x=0).reverse()[0] / this.marks.length
//     }
    
// }

// console.log(student.getInfo);
// console.log(student.getMarks);
// console.log(student.addMark(5));
// console.log(student.getAverageMark);

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.dismis = [];
    }
      getInfo() {
          return ` ${this.university} ${this.course} ${this.fullName}`;
    }
      get getMarks() {
       return this.marks;
    } 
      set setMark(mark) {
          this.marks.push(mark);
    }
      getAvarageMark() {
       return this.marks.reduce((sum, arg) => sum + arg, 0) / this.marks.length;
    }
      dismiss() {
       this.dismis = this.marks;
       this.marks = null;
      }
      recover() {
          this.marks = this.dismis;
      }
   }

   studentOstap = new Student('Студент 1го курсу ', 'Вищої Школи Психотерапії м.Одеса,',  ' Остап Родоманський Бендер ' )
   console.log(`${studentOstap.getInfo()}`);
   console.log(`Оценки студента: ${studentOstap.getMarks}`);
   studentOstap.setMark = 5;
   console.log(`Оценки студента после доставленой оценки: ${studentOstap.getMarks}`);
   console.log(`Средний бал студента: ${studentOstap.getAvarageMark()}`)
   studentOstap.dismiss();
   console.log(`После исключения у студента нет оценок: ${studentOstap.getMarks}`);
   studentOstap.recover()
   console.log(`После возобновления, у студента оценки : ${studentOstap.getMarks}`);
  