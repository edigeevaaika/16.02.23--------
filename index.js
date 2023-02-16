let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let example2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(example1.lenth);
console.log(example2.lenth);
console.log(example1[2]);
console.log(example2[2]);
console.log(example1[4]);
console.log(example1[7]);

console.log(example2[1][1]);
4, 15, 1, 2, 77;
let test = example2[2];
console.log(test[1]);

for (let i = 0; i < example1.length; i++) {
  console.log(example1[i]);
}

for (let i = 0; i < example2.length; i++) {
  for (let j = 0; j < example2.length; j++) {
    // console.log (example2[i][j]);
  }
}

let example3 = [4, 1, 7, 10, 11, 10, 33];
if (example3.includes(10)) {
  console.log("yes");
} else {
  console.log("no");
}

let example4 = [5, 4, 1, 55, 1, 0, 2];
let example5 = [3, 11, 4, 15, 1, 2, 77];

for (let i = 0; i < example4.length; i++) {
  if (example5.includes(example4[i])) console.log(example4[i]);
}

// let arrResult = []
// function arrSort() {
//   example4.forEach(value => {
//     if(example5.includes(value) && !arrResult.includes(value)) {
//       arrResult.push(value)
//     }
//   })
//   return arrResult
// }
// let result = arrSort();
// console.log(result);

let example6 = ["a", "b", "c", "f", "d"];
console.log(example6.reverse());

example6.sort();
console.log(example6);

let example7 = [1, 2, 5, 7, 8, 4];
example7.sort(function (a, b) {
  return a - b;
});
console.log(example7);

let carPrice = [4000, 3000, 8000, 5000, 4000, 3000, 7000, 12000, 100000, 1000];
let totalPrice = 0;
for (let i = 0 ; i < carPrice.length; i++){
  totalPrice = totalPrice + carPrice[i];
}

console.log(totalPrice / carPrice.length);


carPrice.sort(function(a,b){
  return a - b;
});
console.log(carPrice);

let medianPrice = (carPrice[4] + carPrice[5]) / 2;
console.log(medianPrice);

