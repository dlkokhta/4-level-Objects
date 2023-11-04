const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//6

// let maxskills = 0;
// let maxSkillsUser = "";

// for (let user in users) {
//   const skills = users[user].skills;
//   let skillsLength = skills.length;

//   if (skillsLength > maxskills) {
//     maxskills = skillsLength;
//     maxSkillsUser = user;
//   }
// }
// console.log(`${maxSkillsUser} has the most skills ${maxskills}`);

//7

// let loggedInUser = 0;

// for (let user in users) {
//   if (users[user].isLoggedIn === true) {
//     loggedInUser++;
//   }
// }
// console.log(`${loggedInUser} logged in users`);

// let pointsCount = 0;

// for (let user in users) {
//   if (users[user].points >= 50) {
//     pointsCount++;
//   }
// }
// console.log(`${pointsCount} user has 50 and more points `);

//8

// console.log(Object.keys(users));

//9

// console.log(Object.values(users));
