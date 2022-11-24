const getStudents = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters/students")
  const results = await response.json();
  const studentsData = await results;
  let students = studentsData;
  return students;
}


const getStaff = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters/staff")
  const results = await response.json();
  const staffData = await results;
  let staff = staffData;
  return staff;
}


export {getStudents, getStaff}





