const organizeInstructors = function(instructors) {
  let courseInstructors = {
    iOS: [],
    Web: [],
    Blockchain: []
  };

  for (let i = 0; i < instructors.length; i++) {
    
    if (instructors[i].course === "iOS") {
      courseInstructors.iOS.push(instructors[i].name)
    } else if (instructors[i].course === "Web") {
      courseInstructors.Web.push(instructors[i].name)
    } else if (instructors[i].course === "Blockchain") {
      courseInstructors.Blockchain.push(instructors[i].name)
    }

  } return courseInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));


console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
