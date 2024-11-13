// function copyArrayAndMultiplyBy2(array) {
//   const output = [];
//   for(let i= 0; i< array.length; i++){
//     output.push(array[i]*2);
//   }
//   return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);
//
// console.log(result);

// What if want to copy array and divide by 2?
function copyArrayAndDevideBy2(array) {
  const output = [];
  for(let i= 0; i< array.length; i++){
    output.push(array[i]/2);
  }
  return output;
}
const myArray = [1,2,3];
const result = copyArrayAndDevideBy2(myArray);

console.log(result);