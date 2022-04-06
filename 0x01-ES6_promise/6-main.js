import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg').then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
