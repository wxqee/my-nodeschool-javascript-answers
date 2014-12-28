module.exports = function (inputWords) {
  return inputWords.reduce(function (pV, cV) {
    pV[cV] = ++pV[cV] || 1;
    return pV;
  }, {}); 
};
