/******************/
/* //1// */
function factorial(x) {
    if (x === 0 || x === 1) {
    }
    var result = 1;
    for ( i = 2; i <= x; i++) {
        result *= i;
    }
    
    return result;
}
document.write(factorial(8));  

document.write("<br>")

/******************/
/* //2// */
function numbersOnly(num) {
    return num.filter(num => typeof num !== 'string');
}
document.write(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 

document.write("<br>")

/******************/
/* //3// */
function addUp(num) {
    var sum = 0;
    for ( i = num; i >= 0; i--) {
        sum += i;
    }
    return sum;
}
document.write(addUp(8));

document.write("<br>")

/******************/
/* //4// */
function minMaxLengthAverage(number) {
    var min = Math.min(...number);
    var max = Math.max(...number); 
    var length = number.length;
    average = number.reduce((sum, num) => sum + num, 0) / length;
    return [min, max, length, average];
}
document.write(minMaxLengthAverage([7, 13, 3, 77, 100]));

document.write("<br>")

/******************/
/* //5// */
function romanNumbers(num) {
var romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
  ]
    var result = "";
  for (var [roman, value] of romanNumerals) {
      
      while (num >= value) {
          result += roman;
          num -= value;
      }}
  return result;
}
document.write(romanNumbers(1989)); 
