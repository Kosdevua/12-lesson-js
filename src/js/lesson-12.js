import axios from 'axios';

import axios from 'axios';

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>',
})
  .then(response => console.log(response))
  .catch(error => console.log(error));
o;
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);
