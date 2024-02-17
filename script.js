/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(arr => {
    if (arr.marks > 50) {
      console.log(`Name: ${arr.name}, Marks: ${arr.marks}`);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if(arr.marks>50){
      console.log(arr.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const passedStudents = arr.filter(arr => arr.marks >= 50);
  console.log(passedStudents);
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalStudents = [
    { id: 4, name: "rose", age: "21", marks: 70 },
    { id: 5, name: "lily", age: "22", marks: 65 },
    { id: 6, name: "jossi", age: "20", marks: 55 }
  ];

  const concatenatedArray = arr.concat(additionalStudents);

  console.log(concatenatedArray);
}
