let example1 = [1,2,3,4,5,6,7,8,9];
let example2 = [[1,2,3],[4,5,6],[7,8,9]];

console.log(example1.lenth);
console.log(example2.lenth);
console.log(example1[2]);
console.log(example2[2]);
console.log(example1[4]);
console.log(example1[7]);


console.log(example2[1][1]);

let test = example2[2];
console.log(test[1]);

for( let i = 0; i < example1.length; i ++){
  console.log (example1[i]); 
}

 for( let i = 0; i < example2.length; i ++){
  for( let j = 0; j < example2.length; j ++){
  console.log (example2[i][j]); 
}
}