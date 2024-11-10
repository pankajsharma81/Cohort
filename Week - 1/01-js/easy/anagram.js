/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let ObjStr1 = {};

  if(str1.length != str2.length){
    return false;
  }

  for(ch of str1){
    ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
  }

  for(ch of str2){
    if(!ObjStr1[ch]){
      return false;
    }
    ObjStr1[ch] -= 1;
  }
}

module.exports = isAnagram;
