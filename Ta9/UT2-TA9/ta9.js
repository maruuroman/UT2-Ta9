function getOdds (nums) {
  const impares = nums.filter(num => num % 2 !== 0);
  console.log(impares)
}

getOdds([7,6,2,4,7,3,8,5]) ;