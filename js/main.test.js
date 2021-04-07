const functions = require('./main');

const users = [{
  username: "guest7654",
  posts: [{
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  }]
}, {
  username: "guest1234",
  posts: [{
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  }]
}];

const posts = [{
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  }, {
  title: "eum et est occaecati"
  }, {
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  }, {
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
}]

const usersLocations = [{
  name: "Leanne Graham",
  address: {
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  }
}, {
  name: "Chelsey Dietrich",
  address: {
    geo: {
      lat: "-31.8129",
      lng: "62.5342"
    }
  }
}, {
  name: "Ervin Howell",
  address: {
    geo: {
      lat: "-43.9509",
      lng: "-34.4618"
    }
  }
}]

test('show how many posts were written by user', () => {
  expect(functions.postCounter(users)).toEqual(["guest7654 napisał(a) 1 postów", "guest1234 napisał(a) 1 postów"]);
})

test('show not unique titles', () => {
  expect(functions.uniqueTitles(posts)).toEqual(["sunt aut facere repellat provident occaecati excepturi optio reprehenderit"]);
})

test('find closest user', () => {
  expect(functions.closestUser(usersLocations)).toEqual( {
    'Leanne Graham': [ 'Chelsey Dietrich', 19.411752269179626 ],
    'Chelsey Dietrich': [ 'Leanne Graham', 19.411752269179626 ],
    'Ervin Howell': [ 'Chelsey Dietrich', 97.7525194560222  ]
});
})
