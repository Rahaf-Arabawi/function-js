/*******************/
/* //1// */
function findSmallest(small){
  return Math.min(...small)
}
document.write(findSmallest([30, 45, 60, 7]))

document.write("<br>")

/*******************/
/* //2// */
function AlphabeticalOrder(ssr){
  return (ssr)
  .split('')
  .sort()
  .join('');
}
document.write(AlphabeticalOrder('hello'))

document.write("<br>")

/*******************/
/* //3// */
function oddOrEven(number){
if(number%2===0){
 return"Even"
}else{
    return"Odd"
}
}
document.write(oddOrEven(9))

document.write("<br>")

/*******************/
/* //4// */
function evenNum(number){
  return number.filter(number=>number%2===0)
}
document.write(evenNum([1, 2, 3, 4, 5, 6,7,8,9]))

document.write("<br>")

/*******************/
/* //5// */
function getAbsSum(number){
    return (number)
 .map(number=>Math.abs(number))
 .reduce((sum,number) => sum+number,0);
 }
document.write(getAbsSum([-1, -3, -5, -4, -10, 0]));