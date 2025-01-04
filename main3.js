/******************/
/* //1// */
function countWords(sentence) {
    
    var words = sentence.split(' ').filter(word => word.trim() !== '');
    return words.length;
  }
document.write(countWords('hello from CodingAcademy!')); 

document.write("<br>")

/******************/
/* //2// */
function MultiplyByLength(array){
    var length =array.length
    return array.map(array => array*length)
}
document.write(MultiplyByLength([4,2,5]))

document.write("<br>")

/******************/
/* //3// */
function checkEnding(str1,str2){
  return str1.endsWith(str2);
} 
document.write(checkEnding("CodingSchool", "Ac"));

document.write("<br>")

/******************/
/* //4// */
function doubleChar(cood){
  return cood
  .split('')
  .map(cood => cood + cood)
  .join('');
}
document.write(doubleChar('Coding'));

document.write("<br>")

/******************/
/* //5// */
function findIndex(array,number){
 var index=array.indexOf(number)
 return index !== -1 ? index +1:-1
}
document.write(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'))