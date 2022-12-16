const usersDB = [];

//UsersDB
// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

let id = 1;

const getAllUsers = () => {
  return usersDB;
};

const createNewUser = (obj) => {
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  };
  usersDB.push(newUser)
  return newUser
};

const usersById = (id) => {
  const data = usersDB.find((user) => user.id == id);
  return data;
};



module.exports = {
  getAllUsers,
  createNewUser,
  usersById,
}
