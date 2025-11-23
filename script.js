let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  employees.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  employees.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  };

  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  employees = employees.filter((emp) => emp.profession !== "admin");
  console.log(employees);
}

function ConcatinateArray() {
  const newArray = [
    { id: 5, name: "mike", age: "22", profession: "designer" },
    { id: 6, name: "emma", age: "21", profession: "developer" },
    { id: 7, name: "ryan", age: "23", profession: "manager" }
  ];

  const concatenated = employees.concat(newArray);
  console.log(concatenated);
}
