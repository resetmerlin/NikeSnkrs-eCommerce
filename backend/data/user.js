import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1q2w3e4r1!", 10),
    isAdmin: true,
  },

  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("1q2w3e4r1!", 10),
  },
  {
    name: "merlin",
    email: "merlin@example.com",
    password: bcrypt.hashSync("1q2w3e4r1!", 10),
  },
];

export default user;
