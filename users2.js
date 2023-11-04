const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

//10 a.

// console.log(users);
// const newUser = {
//   _id: "newUser",
//   username: "dimitri",
//   email: "newuser@new.com",
//   password: "123456",
//   createdAt: "04/11/2023 2:40 AM",
//   isLoggedIn: false,
// };

// const signUp = (newUser) => {
//   let checkUser = users.find((user) => user.username === newUser.username);
//   if (checkUser) {
//     return "User already has an account";
//   } else {
//     users.push(newUser);
//     return "User has been successfully added";
//   }
// };

// const result = signUp(newUser);
// console.log(result);
// console.log(users);

//10 b.

// const signIn = (username, password) => {
//   const user = users.find((user) => user.username === username);
//   if (user) {
//     if (user.password === password) {
//       user.isLoggedIn = true;
//       console.log(`${user.username} has successfully signed in `);
//     } else {
//       console.log(`has successfully signed in `);
//       return false;
//     }
//   } else {
//     console.log("User not found. Please check your username.");
//     return false;
//   }
// };

// const username = "dimitri";
// const password = "wewerEerwer";
// signIn(username, password);
