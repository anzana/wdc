function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }return false;
}

function factorial(n) {
  var result = n;
  for (var i = n-1; i>=1; i--) {
    result *= i;
  }
  return result;
}

function kebabtoSnake(text){
  return text.replace("-", "_");
}
