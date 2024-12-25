import { toysRequested } from './data.js'

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/ 
const allToys = toysRequested.flatMap(location => 
  location.toys.map(toy => ({ 
    name: Object.keys(toy)[0], 
    count: Object.values(toy)[0] 
  }))
);

const toyCounts = allToys.reduce((acc, toy) => {
  acc[toy.name] = (acc[toy.name] || 0) + toy.count;
  return acc;
}, {});

const mostPopularToy = Object.keys(toyCounts).reduce((a, b) => 
  toyCounts[a] > toyCounts[b] ? a : b 
);


console.log(`The most popular toy is <TOY> with <NUMBER> requests.`);