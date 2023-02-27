module.exports = function check(str, bracketsConfig) {
  // your solution
  if(!(str.length % 2 == 0)){
    return false
  }
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(brackets => {
      brackets = brackets.join('');
      if(str.includes(brackets)){
        str = str.replace(brackets,'')
        i = 0;
      }
    });
  } 
  return str.length ? false : true;

}
