let students = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
];

function PrintStudentbyMap() {
    let studentsWithMarksOver50 = students.filter(student => student.marks > 50);
    let studentNamesWithMarksOver50 = studentsWithMarksOver50.map(student => student.name);
    console.log(studentNamesWithMarksOver50);
}

function PrintStudentbyForEach() {
    students.forEach(student => {
        if (student.marks > 50) {
            console.log(student);
        }
    });
}

function addData() {
    let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    students.push(newStudent);
    console.log(students);
}

function removeFailedStudent() {
    students = students.filter(student => student.marks >= 50);
    console.log(students);
}

function ConcatenateArray() {
    let newStudents = [
        { id: 5, name: "alice", age: "21", marks: 55 },
        { id: 6, name: "bob", age: "22", marks: 60 },
        { id: 7, name: "carol", age: "20", marks: 70 }
    ];
    students = students.concat(newStudents);
    console.log(students);
}
