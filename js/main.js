const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';


const postCounter = (users) => {
  let postNum = [];
  users.map(user => postNum.push(user.username + " napisał(a) " + user.posts.length + " postów"));

  console.log(postNum);
  return postNum;
}

const uniqueTitles = (posts) => {
  const duplicatedTitles = [];
  const postTitles = posts.map(p => p.title).sort();
  console.log(postTitles);

  for (let i = 0; i < postTitles.length - 1; i++) {
    if (postTitles[i] === postTitles[i + 1] && duplicatedTitles.indexOf(postTitles[i]) === -1) {
      duplicatedTitles.push(postTitles[i])
    }
  }

  console.log(duplicatedTitles);
  return duplicatedTitles;
}

const closestUser = (users) => {
  const geoLat = users.map(l => l.address.geo.lat);
  const geoLng = users.map(l => l.address.geo.lng);
  let distances = {};

  for (let j = 0; j < users.length; j++){
    const userDistances = {};
    for (let i = 0; i < users.length; i++){
      if (i !== j) {
        let dist = Math.sqrt(Math.pow(users[j].address.geo.lat - geoLat[i], 2) +
          Math.pow(users[j].address.geo.lng - geoLng[i], 2));
        userDistances[users[i].name] = dist;
      }
    }

    const closestUser =  Object.entries(userDistances).reduce((entry1, entry2) => entry1[1] < entry2[1] ? entry1 : entry2)
    distances[users[j].name] = closestUser;
  }

  console.log(distances);
  return(distances);
}

async function apiOperations() {

  const responseUsers = await fetch(usersUrl);
  const users = await responseUsers.json();
  const responsePosts = await fetch(postsUrl);
  const posts = await responsePosts.json();

  users.forEach(user => user.posts = posts.filter(post => post.userId === user.id));

  postCounter(users);
  uniqueTitles(posts);
  closestUser(users);
  console.log(users);
}

apiOperations();

let functions = {
  postCounter: postCounter,
  uniqueTitles: uniqueTitles,
  closestUser: closestUser
}

module.exports = functions;



