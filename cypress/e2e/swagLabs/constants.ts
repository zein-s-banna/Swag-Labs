import { UserCredentials } from "./types";

// Define an array of UserCredentials objects
const users: UserCredentials[] = [
  { userName: "standard_user", password: "secret_sauce" },
  //{ userName: "locked_out_user", password: "secret_sauce" }, // locked - Invalid user name
  { userName: "problem_user", password: "secret_sauce" },
  { userName: "performance_glitch_user", password: "secret_sauce" },
  { userName: "error_user", password: "secret_sauce" },
  { userName: "visual_user", password: "secret_sauce" },
];

// Function to select a random user from the users array
const getRandomUser = (): UserCredentials => {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

// Get a Random user to login and export it
export const DEFAULT_USER = getRandomUser();

// Generate Unique User - Non Existing User
export const generateUniqueUser = (): UserCredentials => {
  const newUserName = `user_${Math.floor(Math.random() * 10000)}`;
  const userExists = users.some((user) => user.userName === newUserName);
  if (userExists) {
    return generateUniqueUser();
  }
  return { userName: newUserName, password: "default_password" };
};
