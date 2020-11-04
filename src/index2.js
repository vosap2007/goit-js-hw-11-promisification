/*Перепиши функцию toggleUserState() так, чтобы она не
использовала callback - функцию callback, а принимала
всего два параметра allUsers и userName и возвращала
промис.*/

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return Promise.resolve(allUsers, userName);
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

