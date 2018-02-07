function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }return false;
}

function factorial(n) {
  var result = 1;
  for (var i = 2; i<=n; i++) {
    result *= i;
  }
  return result;
}

function kebabtoSnake(text){
  return text.replace("-", "_");
}
