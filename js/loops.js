var num = -10;
var x = 10;
var y = 300;
var z = 5;

console.log("Print all numbers between -10 and 19");
while (num<=19) {
  console.log(num);
  num++;
}
console.log("Print all even numbers between 10 and 40");
while (x<=40) {
  if (x%2 === 0 ) {
    console.log(x);
  }
  x++;
}
console.log("Print all odd numbers between 300 and 333");
while (y<=333) {
  if (y%2 !== 0) {
    console.log(y);
  }
  y++;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
while (z<=50) {
  if ((z%5 === 0) && (z%3 === 0)) {
    console.log(z);
  }
  z++;
}
