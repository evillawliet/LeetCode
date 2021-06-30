/**
 * Hamming Distance
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

 * Given two integers x and y, return the Hamming distance between them.
*/

function hammingDistance(x: number, y: number): number {
  let diff = x ^ y
  let distance = 0
  while(diff) {
    distance += diff & 1
    diff >>= 1
  }
  return distance
}

// maybe ok 
// function hammingDistance(x: number, y: number): number {
//   let diff = x ^ y
//   let distance = 0
//   while(diff) {
//     diff &= diff - 1
//     distance++
//   }
//   return distance
// }