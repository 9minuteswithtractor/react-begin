import foodArr from "./food";
import { choice, remove } from "./helpers";

// randomly draw a moji from array
let fruit = choice(foodArr);

console.log(`I'd like one ${fruit}, please!`);

console.log(`Here You go : ${fruit}`);

console.log(`Delicious! Maybe I have another one?`);

let fruitsLeft = remove(foodArr, fruit);

console.log(
  `Sorry That was the last one of that kind - we have ${fruitsLeft.length} other fruits left.`
);
