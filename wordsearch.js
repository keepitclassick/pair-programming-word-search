const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1)
    return false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin)  {
    if (l.includes(word)) return true;
  }
  let newLetters = transpose(letters);
  const vertJoin = newLetters.map(vs => vs.join(''));
  for (let x of vertJoin)  {
    if (x.includes(word)) return true;
  }
  return false;
};
  
const transpose = function(matrix) {
  let newMat = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMat.push([]);
  }
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      newMat[col][row] = matrix[row][col];
    }
  }
  return newMat;
};
  
module.exports = wordSearch;
