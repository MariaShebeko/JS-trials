// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { ...a, x:10, y:10, z:20, ...b, z:30, };
// console.log(c);

const profile = {
  name: 'Jack',
  tag: 'juke',
  location: 'Ukraine',
  avatar: 'https://somepicture.jpg',
  stats: {
    followers: 1000,
    views: 5000,
    likes: 0,
  },
}

console.log(profile);

const { name, tag, location, ...restShit } = profile;

console.log(name, tag, location);
console.log(restShit);

