const getstudents='SELECT * FROM students';
const getstudentsById='SELECT * FROM STUDENTS WHERE id=$1';
const checkEmailExists="SELECT s from students s WHERE s.email=$1";
const addStudent="INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";
const removeStudent="Delete from students where id=$1";
const updateStudent="Update students SET name=$1 where id=$2 "
module.exports={
    getstudents,
    getstudentsById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
}